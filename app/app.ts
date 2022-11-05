import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { Http } from '@nativescript/core'

Http.request('http://127.0.0.1:8000/fetchGuestToken').then(
  (result: any) => {
    console.log(result)
  },
  e => {}
)

svelteNativeNoFrame(App, {});
