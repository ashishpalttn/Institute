import { datadogRum } from '@datadog/browser-rum';

export const initdatadogRum = () => {
        datadogRum.init({
            applicationId: '49ef2b6b-0e37-49fb-a43c-19e9e2720ce5',
            clientToken: 'pub23c5976a99b8a48020d5757142c99a54',
            // `site` refers to the Datadog site parameter of your organization
            // see https://docs.datadoghq.com/getting_started/site/
            site: 'us5.datadoghq.com',
            service: 'institute-svm',
            env: process.env.DATADOG_RUM,
            // Specify a version number to identify the deployed version of your application in Datadog
            // version: '1.0.0',
            sessionSampleRate: 100,
            sessionReplaySampleRate: 20,
            trackUserInteractions: true,
            trackResources: true,
            trackLongTasks: true,
            defaultPrivacyLevel: 'mask-user-input',
            // allowedTracingUrls: ["https://cl.carelogistics.net", "https://cl.df.cltest4.com"],
        });
        datadogRum.startSessionReplayRecording();
}
export const setDatadogUserDetails = (user) => {
    const { displayName } = user;
    if (!displayName) {
      datadogRum.clearUser();
      return;
    }
    datadogRum.setUser({ username: displayName });
  };
  
