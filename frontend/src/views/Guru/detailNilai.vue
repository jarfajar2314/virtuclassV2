<template>
    <div class="container mt-5 pt-3 pb-5 text-start">
        <div class="d-flex flex-column">
            <div class="p-5 mt-5 rounded red-maroon">
                <div class="row reverse">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 flex">
                        <div class="wrap p-4">
                            <div class="row">
                                <h2 class="title-1">John Doe</h2>
                                <h3 class="title-2 mt-4">SMA Negeri XX Bandung</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-5">
                        <img :src=thumb class="flex">
                    </div>
                </div>
            </div>
            <div class="p-5 mt-5 rounded shadow w-75 align-self-center">
                <MDBTabs v-model="activeTabId1">
                    <!-- Tabs navs -->
                    <MDBTabNav tabsClasses="mb-3">
                    <MDBTabItem tabId="ex1-1" href="ex1-1">PHB</MDBTabItem>
                    <MDBTabItem tabId="ex1-2" href="ex1-2">UTS</MDBTabItem>
                    <MDBTabItem tabId="ex1-3" href="ex1-3">UAS</MDBTabItem>
                    <MDBTabItem tabId="ex1-4" href="ex1-4">Nilai</MDBTabItem>
                    </MDBTabNav>
                    <!-- Tabs navs -->
                    <!-- Tabs content -->
                    <MDBTabContent>
                    <MDBTabPane tabId="ex1-1">
                        
                    </MDBTabPane>
                    <MDBTabPane tabId="ex1-2">
                        
                    </MDBTabPane>
                    <MDBTabPane tabId="ex1-3">

                    </MDBTabPane>
                    <MDBTabPane tabId="ex1-4">
                        <div class="d-flex flex-column">
                            <div class="mt-5">
                                <label for="kategori-nilai">Kategori Nilai</label>
                                <select class="form-control md-2">
                                    <option>PHB</option>
                                    <option>UTS</option>
                                    <option>UAS</option>
                                </select>
                            </div>
                            <div class="mt-3">
                                <label for="kategori-nilai">Nilai</label>
                                <input name="nilai" class="form-control" id="nilai" required>
                            </div>
                            <div class="d-grid mt-5 mb-1 align-self-end" style="width:100px">
                            <button type="submit" name="submit" class="btn btn-block text-light"
                                style="background-color: #901311; text-transform: none;">Nilai</button>
                            </div>
                        </div>
                        
                    </MDBTabPane>
                    </MDBTabContent>
                    <!-- Tabs content -->
                </MDBTabs>
            </div>
        </div>
    </div>
</template>

<script>
import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

export default {
    name: 'profileGuru',
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
    },
    data() {
        return {
            profileLogo: require('@/assets/Profile.png'),
            editLogo: require('@/assets/Edit.png'),
        }
    },
    setup() {
      const activeTabId1 = ref('ex1-1');

      return {
        activeTabId1,
      };
    },

}
</script>   