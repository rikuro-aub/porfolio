<template>
<div>
    <h1>skill</h1>
    <skill-bar skillName='VB.NET' activeLevel=3></skill-bar>
    <skill-bar skillName='PHP' activeLevel=3></skill-bar>
    <skill-bar skillName='SQL(ストアドプロシージャ)' activeLevel=3></skill-bar>
    <skill-bar skillName='Bash' activeLevel=2></skill-bar>
    <skill-bar skillName='HTML' activeLevel=1></skill-bar>
    <skill-bar skillName='CSS' activeLevel=1></skill-bar>
    <skill-bar skillName='JavaScript' activeLevel=1></skill-bar>
    <skill-bar skillName='ASP.NET' activeLevel=2></skill-bar>
    <skill-bar skillName='Symfony' activeLevel=2></skill-bar>
    <skill-bar skillName='Vue.js' activeLevel=1></skill-bar>
    <skill-bar skillName='Git' activeLevel=2></skill-bar>
    <skill-bar skillName='SVN' activeLevel=2></skill-bar>
    <skill-bar skillName='Slack' activeLevel=2></skill-bar>
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
