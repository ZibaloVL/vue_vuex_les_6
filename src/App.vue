<template>
  <div>
    <h3>progressbar</h3>
    <app-progresbar></app-progresbar>
    <app-header></app-header>
    <app-content></app-content>
  </div>
</template>

<script>
import AppProgresbar from './components/Progresbar';
import AppHeader from './components/Header';
import AppContent from './components/Content';

export default {

  components:{
    AppProgresbar,
    AppHeader,
    AppContent
  }

}
</script>

<style>

</style>
