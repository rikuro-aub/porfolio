<template>
<div>
    <h1>skill</h1>
    <p class="section-name">Program language</p>
    <p class="skill-section">
        <skill-bar skillName='VB.NET' activeLevel=3></skill-bar>
        <skill-bar skillName='PHP' activeLevel=3></skill-bar>
        <skill-bar skillName='SQL(ストアドプロシージャ)' activeLevel=3></skill-bar>
        <skill-bar skillName='Bash' activeLevel=2></skill-bar>
        <skill-bar skillName='HTML' activeLevel=1></skill-bar>
        <skill-bar skillName='CSS' activeLevel=1></skill-bar>
        <skill-bar skillName='JavaScript' activeLevel=1></skill-bar>
    </p>
    <p class="section-name">Framework</p>
    <p class="skill-section">
        <skill-bar skillName='ASP.NET' activeLevel=2></skill-bar>
        <skill-bar skillName='Symfony' activeLevel=2></skill-bar>
        <skill-bar skillName='Vue.js' activeLevel=1></skill-bar>
    </p>
    <p class="section-name">Others</p>
    <p class="skill-section">
        <skill-bar skillName='Git' activeLevel=2></skill-bar>
        <skill-bar skillName='SVN' activeLevel=2></skill-bar>
        <skill-bar skillName='Slack' activeLevel=2></skill-bar>
    </p>
</div>
</template>

<script>
import SkillBar from '@/modules/SkillBar.vue'
export default {
    components: {
        SkillBar
    }
}
</script>

<style>
    .skill-section {
        padding: 0.5em 1em;
        margin: 2em 20%;
        border: double 5px #4ec4d3;
    }

    .section-name {
        text-align: left;
        max-width: 100%;
        padding-left: 20%;
    }
</style>
