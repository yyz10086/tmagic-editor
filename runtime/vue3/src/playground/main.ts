/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApp } from 'vue';

import App from './App.vue';

const componentUrl = '/tmagic-editor/playground/runtime/vue3/assets/components.js';

import(componentUrl).then(() => {
  const magicApp = createApp(App);
  const { components, plugins } = window.magicPresetComponents;

  Object.values(components).forEach((component: any) => {
    magicApp.component(component.name, component);
  });

  Object.values(plugins).forEach((plugin: any) => {
    magicApp.use(plugin);
  });

  magicApp.mount('#app');
});
