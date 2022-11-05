import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { Http } from '@nativescript/core'

Http.getJSON('http://127.0.0.1:8000/test').then(
  (result: any) => {
    console.log(result)
  },
  e => {}
)

svelteNativeNoFrame(App, {});
