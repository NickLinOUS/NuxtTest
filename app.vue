<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 20px;
      "
    >
      <div>
        <router-link to="pagegoogleform">Google Form</router-link>
      </div>
      <div>
        <router-link to="pagehubspot">HubSpot</router-link>
      </div>
      <div>
        <router-link to="pagetypeform">Typeform</router-link>
      </div>
      <div>
        <router-link to="pagepaperform">Paper Form</router-link>
      </div>
    </div>
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
    <!-- <FileHtml /> -->
    <!-- <Form /> -->
    <!-- <Typeform /> -->
    <!-- <File />
    <Testdeep /> -->
  </div>
</template>
