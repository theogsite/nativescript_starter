import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { Http } from '@nativescript/core'

Http.getJSON('https://httpbin.org/get').then(
  (result: any) => {
    console.log(result)
  },
  e => {}
)

svelteNativeNoFrame(App, {});
