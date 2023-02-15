<template>
  <div>
    <template v-if="products.length">
      <div class="">
        <code class="text-xs">{{ products }}</code>
        <hr>
      </div>
      <ul class="mt-14">
        <li v-for="product in products" :key="product.id" class="mb-14">
          <p class="text-lg"><code class="text-sm italic">product.attributes.Title</code>: {{ product.attributes.Title }}</p>
          <p class="text-lg"><code class="text-sm italic">product.attributes.Description</code>: {{ product.attributes.Description }}</p>
          <p class="text-lg"><code class="text-sm italic">product.attributes.Prices</code>: {{ product.attributes.Prices }}</p>
          <p class="text-lg"><code class="text-sm italic">product.attributes.createdAt</code>: {{ product.attributes.createdAt }}</p>
          <p class="text-lg"><code class="text-sm italic">product.attributes.updatedAt</code>: {{ product.attributes.updatedAt }}</p>
          <p class="text-lg"><code class="text-sm italic">product.attributes.publishedAt</code>: {{ product.attributes.publishedAt }}</p>
          <p class="text-lg" v-if="product.attributes.Image.data"><code class="text-sm italic">product.attributes.Image.data.attributes.url</code>: {{ product.attributes.Image.data.attributes.url }}</p>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="flex items-center justify-center h-screen text-lg font-bold text-red-700">Loading!!</div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: [],
      }
    },
    created() {
      axios
        .get('http://localhost/api/products?populate=*')
        .then(response => {
          this.products = response.data.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
</script>