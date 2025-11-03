import {computed, inject} from '@angular/core';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {HttpClient} from '@angular/common/http';
import {catchError, of, pipe, switchMap, tap} from 'rxjs';
import {CVData, Language} from './models/cv-data.model';

interface CVState {
  language: Language;
  data: CVData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CVState = {
  language: 'en',
  data: null,
  loading: false,
  error: null
};

export const CVStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withComputed((store) => ({
    personalInfo: computed(() => store.data()?.personalInfo ?? null),
    skills: computed(() => store.data()?.skills ?? {
      frontEnd: [],
      backEnd: [],
      other: []
    }),
    experiences: computed(() => store.data()?.experiences ?? []),
    educations: computed(() => store.data()?.educations ?? []),
    sectionTitles: computed(() => store.data()?.sectionTitles ?? {
      skills: '',
      experience: '',
      education: ''
    }),
    sectionLabels: computed(() => store.data()?.sectionLabels ?? {
      dateOfBirth: '',
      location: '',
      email: '',
      phone: '',
      website: '',
      responsibilities: '',
      frontEnd: '',
      backEnd: '',
      other: '',
      copied: ''
    }),
    footerNote: computed(() => store.data()?.footerNote ?? ''),
  })),
  withMethods((store, http = inject(HttpClient)) => {
    const loadData = rxMethod<Language>(
      pipe(
        tap(() => patchState(store, {loading: true, error: null})),
        switchMap((language) =>
          http.get<CVData>(`data/${language}.json`).pipe(
            tap((data) => {
              patchState(store, {data, language, loading: false, error: null});
            }),
            catchError((error) => {
              patchState(store, {
                loading: false,
                error: error.message || 'Failed to load CV data'
              });
              return of(null);
            })
          )
        )
      )
    );

    return {
      loadData,
      setLanguage: (language: Language) => {
        patchState(store, {language});
        loadData(language);
      }
    };
  })
);

