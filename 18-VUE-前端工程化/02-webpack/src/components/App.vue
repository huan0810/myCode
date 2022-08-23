<!-- vue单文件组件基本结构 -->
<template>
    <div>
        <h1>这是APP根组件</h1>
    </div>
</template>

<script>
    // 向外暴露端口
    export default {
        data() {
            return {};
        },
        methods: {},
        // ... 其它业务逻辑
    }
</script>

<!-- scoped防止组件之间的样式冲突 -->
<style scoped>
    h1 {
        color: #eee;
    }
</style>