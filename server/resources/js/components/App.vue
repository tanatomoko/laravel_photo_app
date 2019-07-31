<!-- ルートコンポーネント -->
<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <RouterView /><!-- URL に対応する HTML 部品が入れ替わって描画される -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
