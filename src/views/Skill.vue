<template>
<div class="skill">
    <h1>Skill</h1>
    <p class="section-name">Program language</p>
    <p class="skill-section">
        <skill-bar skill-name='VB.NET' active-level=3></skill-bar>
        <skill-bar skill-name='PHP' active-level=3></skill-bar>
        <skill-bar skill-name='SQL(ストアドプロシージャ)' active-level=3></skill-bar>
        <skill-bar skill-name='Bash' active-level=2></skill-bar>
        <skill-bar skill-name='HTML' active-level=1></skill-bar>
        <skill-bar skill-name='CSS' active-level=1></skill-bar>
        <skill-bar skill-name='JavaScript' active-level=1></skill-bar>
        <skill-bar skill-name='Ruby' active-level=1></skill-bar>
    </p>
    <p class="section-name">Framework</p>
    <p class="skill-section">
        <skill-bar skill-name='ASP.NET' active-level=2></skill-bar>
        <skill-bar skill-name='Smarty' active-level=2></skill-bar>
        <skill-bar skill-name='Vue.js' active-level=1></skill-bar>
        <skill-bar skill-name='Ruby on Rails' active-level=1></skill-bar>
    </p>
    <p class="section-name">Others</p>
    <p class="skill-section">
        <skill-bar skill-name='Git' active-level=2></skill-bar>
        <skill-bar skill-name='SVN' active-level=2></skill-bar>
        <skill-bar skill-name='Slack' active-level=2></skill-bar>
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
    padding: 0.5em 2em;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 3em;
    border: double 5px #4ec4d3;
    max-width: 80%;
}
.section-name {
    text-align: left;
    max-width: 100%;
    padding-left: 15%;
    font-size: 21px;
}

/* スマートフォン対応 */
@media screen and (max-width:599px) {
    .section-name {
        padding-left: 0;
    }

    .skill-section {
        margin: 0 0 2rem 0;
        min-width: 100%;
    }

    .skill-bar {
        padding-inline-start: 0.8rem;
        margin-block-end: 0;
        margin-bottom: 2rem;
    }
}
</style>
