<template>
  <form @submit.prevent="submit">
    <div class="form-control" :class="{ invalid: !movieName.isValid }">
      <label for="name">Movie name</label>
      <input type="text" id="name" v-model.trim="movieName.value" @blur="clearValidity('movieName')"/>
      <p v-if="!movieName.isValid">Movie name must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !desc.isValid }">
      <label for="desc">Movie description</label>
      <textarea rows="5" id="desc" v-model.trim="desc.value" @blur="clearValidity('desc')"></textarea>
      <p v-if="!desc.isValid">Description must not be empty.</p>
    </div>
    <p v-if="!formValid">Please fix above errors and try again</p>
    <base-button>Create</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      movieName: {
        value: '',
        isValid: true,
      },
      desc: { value: '', isValid: true },
      formValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formValid = true;
      if (this.movieName.value === '') {
        this.movieName.isValid = false;
        this.formValid = false;
      }
      if (this.desc.value === '') {
        this.desc.isValid = false;
        this.formValid = false;
      }
    },
    submit() {
      this.validateForm();
      if (!this.formValid) return;
      const formData = {
        movieName: this.movieName.value,
        desc: this.desc.value,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>