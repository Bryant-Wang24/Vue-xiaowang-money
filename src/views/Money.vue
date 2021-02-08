<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"></FormItem>
    </div>
    <Tags/>
    <Types :value.sync="record.type"/>
    {{count}}
    <button @click="add">+1</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import store from '@/store/index2';


@Component({
  components: {Tags, FormItem, Types, NumberPad},
  computed: {
    count() {
      return store.count;
    },
    recordList() {
      return store.recordList;
    }
  }
})

export default class Money extends Vue {
  //['服饰', '餐饮', '住房', '交通', '医疗', '购物', '娱乐', '教育'];
  add() {
    store.addCount();
  }

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: -2px 0;
}
</style>