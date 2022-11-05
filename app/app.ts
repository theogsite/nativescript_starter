import { svelteNativeNoFrame } from 'svelte-native';
import App from './App.svelte';
import { Http, HttpResponse } from '@nativescript/core';

import { embedDashboard } from '@superset-ui/embedded-sdk';

embedDashboard({
  id: 'edf06799-d2b7-4fce-9dea-961c7317b798', // given by the Superset embedding UI
  supersetDomain: 'http://qa-linux-05.westus.cloudapp.azure.com:8088',
  mountPoint: document.getElementById('superset-container'),
  data: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Imxhc3RfbmFtZSI6ImFuYWx5c3QiLCJmaXJzdF9uYW1lIjoiY2xpZW50IiwidXNlcm5hbWUiOiJhbmFseXN0In0sInJlc291cmNlcyI6W3siaWQiOiJlZGYwNjc5OS1kMmI3LTRmY2UtOWRlYS05NjFjNzMxN2I3OTgiLCJ0eXBlIjoiZGFzaGJvYXJkIn1dLCJybHNfcnVsZXMiOltdLCJpYXQiOjE2Njc2MTkwOTkuNTUwMzY4MywiZXhwIjoxNjY3NjE5Mzk5LjU1MDM2ODMsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.XuXEpS1AneQNly7cfp9n57YIsQ9ZJnPIOWKqdDXid8M',
  fetchGuestToken: () => data,
});

svelteNativeNoFrame(App, {});
