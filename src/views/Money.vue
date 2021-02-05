<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Notes/>
    <Tags :data-source="tags"/>
    <Types/>
  </Layout>
</template>

<script lang="ts">
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';

export default {
  name: 'Money',
  components: {Types, Tags, NumberPad, Notes},
  data() {
    return {
      tags: ['服饰', '餐饮', '住房', '交通', '医疗', '购物', '娱乐', '教育']
    };
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>