import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { Http, HttpResponse } from '@nativescript/core'

Http.request({
    url: 'http://127.0.0.1:8000/test',
    method: 'GET'
  }).then(
    (response: HttpResponse) => {
      // Argument (response) is HttpResponse
      console.log(response)
    },
    e => {}
  )

svelteNativeNoFrame(App, {});
