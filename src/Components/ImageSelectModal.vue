<template>
    <teleport to="#modal">
        <div v-if="show" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-4/6 my-6 mx-auto">
                <!--content-->
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-center justify-between p-4 border-b border-solid rounded-t">
                        <h3 class="text-xl font-semibold">
                            Editar bloco
                        </h3>
                        <button @click="handleCloseEvent()" class="p-1 ml-auto bg-transparent border-0 text-black opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                            <span class="bg-transparent text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                x
                            </span>
                        </button>
                    </div>
                    
                    <!--body-->
                    <div class="relative p-4 flex-auto">
                        <slot/>
                    </div>

                    <!--footer-->
                    <div class="flex items-center justify-end p-4 border-t border-solid rounded-b">
                        <button @click="handleCloseEvent()" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Close
                        </button>
                        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="show" class="opacity-70 fixed inset-0 z-40 bg-black"></div>
    </teleport>
</template>

<script>
    export default {
        name: "BaseModal",
        emits: ['close'],
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        setup(props, context) {
            const handleCloseEvent = () => {
                context.emit('close')
            }

            return { handleCloseEvent }
        }
    }
</script>
