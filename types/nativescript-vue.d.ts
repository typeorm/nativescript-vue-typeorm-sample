// Typings for NativeScript-Vue

declare type Buffer = any
declare module 'nativescript-vue' {
    // import vue.js typings
    import Vue from 'vue';
    import {ExtendedVue} from 'vue/types/vue'
    import {ComponentOptions} from 'vue/types/options'

    // creat a nativescript vue class that extends vue.js
    class NativeScriptVue extends Vue {
        /**
         * Registers NativeScript Plugin.
         * @param elementName Name of the element to use in your template
         * @param resolver  function to register the element
         */
        static registerElement(elementName: string, resolver: (...compClass: any[]) => any): void
        $isAndroid: boolean
        $isIOS: boolean

        /**
         * Starts nativescript application.start() method
         */
        $start(): void
        static extend<V extends Vue = Vue>(options: ComponentOptions<V>): ExtendedVue<V, {}, {}, {}, {}>
    }

    export = NativeScriptVue;
}

