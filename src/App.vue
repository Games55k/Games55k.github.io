<script setup>

</script>

<template>
  <div class="Quote-card">
    <p class="Quote">“ Nothing is impossible.”</p>
  </div>

  <div class="Profile-card">
    <div class="Profile">
      <img src=".\icons\htl.png" alt="Profile-I" class="Avatar" />
      <div class="info">
        <h1 class="name">Sleepwf</h1>
        <div class="tags">
          <span class="tag">INFP-T</span>
          <span class="tag">ACMer</span>
          <span class="tag">Full Stack Developer</span>
          <span class="tag">Open Source Enthusiast</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

  .Quote-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 10px;
    font-family: Arial, sans-serif;
    color: #555;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 20px;
  }

  .Quote {
    font-style: italic;
  }

  .Profile-card {
    width: 400px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 15px;
    font-family: Arial, sans-serif;
    color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .Profile {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .Avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .name {
    margin: 0;
    font-size: 1.4em;
    font-weight: bold;
  }

  .tags {
    
  }

  .tag {
    display: inline-block;
    background: #f3f4f6;
    color: #555;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8em;
    margin-right: 5px;
    margin-top: 5px;
  }

</style>
