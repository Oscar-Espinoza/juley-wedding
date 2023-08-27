<template>
  <form>
    <h2 class="title">¿Asistes a la ceremonia?</h2>
    <div class="radio-wrap">
      <input type="radio" id="assist-true" name="assist" :value="true" v-model="radioValue"
        @change="() => handleRadioChange(true)">
      <label for="assist-true" :class="{ checked: willAssist }">
        <span></span>¡Sí, confirmo!
      </label>

      <input type="radio" id="assist-false" name="assist" :value="false" v-model="radioValue"
        @change="() => handleRadioChange(false)">
      <label for="assist-false" :class="{ checked: !willAssist && willAssist !== null }">
        No puedo {{ ':(' }}
      </label>
    </div>
    <input type="text" v-model="name" placeholder="Ingrese su nombre completo" class="name-input">
    <button type="submit" class="button">Enviar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const willAssist = ref(null)
const name = ref('')

const handleRadioChange = (radio) => {
  willAssist.value = radio
}
</script>

<style scoped>
.modal {
  padding: 60px 40px 40px 40px;
  background-color: white;
  z-index: 1;
  position: relative;
  width: 90%;
  max-width: 475px;
  border-radius: 30px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
}

.title {
  font-size: 22px;
  line-height: 30px;
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-bold);
  color: var(--color-1);
}

input[type='radio'] {
  display: none;
}

input[type='radio']::before {
  content: '';
  position: relative;

}

label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;
}

label::before {
  content: '';
  display: inline-block;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #d7d7d7
}

label::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  left: 7px;
  top: 7px;
  border-radius: 50%;
  background: white;
}

label.checked::before {
  background: var(--color-3);
  border: 1px solid var(--color-3);
}

.radio-wrap {
  display: flex;
  justify-content: space-evenly;
  padding-left: 5px;
  cursor: pointer;
  font-size: 18px;
  color: var(--color-2);
}

.name-input {
  border: none;
  padding: 8px;
  border-bottom: 1px solid rgb(238, 238, 238);
  text-align: center;
  font-size: 16px;
}

.name-input:focus {
  outline: none;
}
</style>