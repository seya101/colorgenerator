<template>
 <div class="grid h-screen place-items-center">
    <!-- <h2>Color CSS Generator</h2> -->
		<div class="flex justify-center">
		  <div class="w-96	text-left">
		    <label for="colorInput" class="form-label inline-block mb-2 text-gray-700 ">Color:</label>
		    <input
		      type="text"
		      class="
		        form-control
		        block
		        w-full
		        px-3
		        py-1.5
		        text-base
		        font-normal
		        text-gray-700
		        bg-white bg-clip-padding
		        border border-solid border-gray-300
		        rounded
		        transition
		        ease-in-out
		        m-0
		        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
		      "
		      id="colorInput"
		      placeholder="#0000"
          
          v-model="colorEnter"
		    />
		    <!-- Preview -->
		    <div class="mt-5"> 
		    	<h5 class="">Preview:</h5>
		    	<div 
          class="w-full h-[300px] border border-solid border-gray-300 rounded"
          :style="`background-color:${colorEnter};`"
          >
		    	</div>
		    </div>
		    <!-- Code -->
		    <div class="mt-5 "> 
		    	<h5 class="">Code:</h5>
		    	<div class="w-full h-[100px] border border-solid border-gray-300 rounded flex justify-between p-2">
		    		<p class="text-indigo-500">background-color:  {{colorEnter}};</p>
            
            <button
              @click="copy"
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                </svg>
                <div class="ml-2">COPY</div>
            </button>

		    	</div>
		    </div>
		  </div>
		</div>
		
	</div>
</template>


<script setup>
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'

const colorEnter = ref('#DEDEDE');

const { toClipboard } = useClipboard()

    const copy = async () => {
      try {
        await toClipboard('background-color:' + colorEnter.value + ';')
        alert('Copied to clipboard')
      } catch (e) {
        console.error(e)
      }
    }
</script>

