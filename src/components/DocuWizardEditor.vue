<!-- <template>
    <main id="sample">
        <Editor :init="editorInit" />
    </main>
</template> -->
<template>
    <a-tabs v-model:activeKey="activeKey" class="p-2" >
        <a-tab-pane key="1">
            <template #tab>
                <span>
                    <FormOutlined />
                    Trình soạn thảo
                </span>
            </template>
            <main id="sample">
                <Editor :init="editorInit" />
            </main>
        </a-tab-pane>
        <a-tab-pane key="2">
            <template #tab>
                <span>
                    <SolutionOutlined />
                    Giới thiệu
                </span>
            </template>
            Tab 2
        </a-tab-pane>
    </a-tabs>
</template>
<script src="./DocuWizardEditor.ts" lang="ts"/>



