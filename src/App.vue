<template>
<div class="">
	<!-- Title -->
	<div class="mt-20 mb-16 text-center">
		<h2 class="font-bold text-5xl font-fredoka-one">CSS Gradient Maker</h2>
		<p class="mt-2 font-nunito-sans">"Effortlessly elevate your website with stunning gradient styles."</p>
	</div> 

		
		<div class="w-full text-left">
		
		  	<!-- 1st Color -->
			<div class="flex flex-wrap gap-4">
			<div class="relative grow">
		    <label for="colorInput" class="form-label inline-block mb-2 text-gray-700 font-fredoka-one"> Color</label>
		    <input
		      type="text"
		      class=" 
			    shadow-lg
		        form-control
		        block
		        w-full
		        px-3
		        py-5
		        text-base
		        font-normal
		        text-slate-500
		        bg-white bg-clip-padding
		        border border-solid border-gray-300
		        rounded-lg
		        transition
		        ease-in-out
		        m-0
		        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
		      "
		      id="colorInput"
		      placeholder="#0000"
          	  v-model="colorEnter"
		    />
			<div 
				class="absolute bottom-[10%] left-[82%] w-12 h-12 border border-solid border-gray-300 rounded-lg"
				:style="`background-color:${colorEnter};`" disabled></div>
			</div>

			<!-- Color Rotation-->
			<div class="">
				<label for="firstColorPosition" class="form-label inline-block mb-2 text-gray-700 font-fredoka-one">Position</label>
				<input
				v-model="firstColorPosition"
				type="number"
				class="
				shadow-lg
		        form-control
		        block
		        w-full
		        px-3
		        py-5
		        text-base
		        font-normal
		        text-slate-500
		        bg-white bg-clip-padding
		        border border-solid border-gray-300
		        rounded-lg
		        transition
		        ease-in-out
		        m-0
		        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
				"
				id="firstColorPosition"
				/>
			</div>
			</div>

			<!-- 2nd Color -->
			<div class="flex flex-wrap gap-4">
			<div class="relative grow ">
		    <label for="colorInput" class="form-label inline-block mb-2 text-gray-700 "></label>
		    <input
		      type="text"
		      class=" 
			    shadow-lg
		        form-control
		        block
		        w-full
		        px-3
		        py-5
		        text-base
		        font-normal
		        text-slate-500
		        bg-white bg-clip-padding
		        border border-solid border-gray-300
		        rounded-lg
		        transition
		        ease-in-out
		        m-0
		        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
		      "
		      id="colorInput"
		      placeholder="#0000"
			  v-model="secondColor"
		    />
			<div class="absolute bottom-[10%] left-[82%] w-12 h-12 border border-solid border-gray-300 rounded-lg"
				:style="`background-color:${secondColor};`"></div>
			</div>

			<!-- Color Rotation-->
			<div class="">
				<label for="firstColorPosition" class="form-label inline-block mb-2 text-gray-700"></label>
				<input
				v-model="secondColorPosition"
				type="number"
				class="
				shadow-lg
		        form-control
		        block
		        w-full
		        px-3
		        py-5
		        text-base
		        font-normal
		        text-slate-500
		        bg-white bg-clip-padding
		        border border-solid border-gray-300
		        rounded-lg
		        transition
		        ease-in-out
		        m-0
		        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
				"
				id="secondColorPosition"
				/>
			</div>
			</div>

			<!-- Add Color -->
			<div class="flex justify-center mt-7">
				<button class="hover:animate-bounce inline-flex items-center justify-center w-full px-3
		        py-5 text-white transition-colors duration-150 bg-gray-200 rounded-lg focus:shadow-outline hover:bg-gray-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				</button>
			</div>

			<!-- Type -->
			<div class="mt-10">
				<label for="gradientType" class="form-label inline-block mb-2 text-gray-700 mt-5 font-fredoka-one">Type</label>
				<select 
					v-model="selectedType"
					id="gradientType" 
					class="px-3 py-5 capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
					<option value="linear-gradient" class="capitalize">Linear</option>
					<option value="radial-gradient" class="capitalize">Radial</option>
				</select>
			</div>

			<!-- Angle Rotation-->
			<div class="mt-10" v-if="selectedType === 'linear-gradient'">
				<label for="minmax-range" class="form-label inline-block mb-2 text-gray-700 font-fredoka-one">Rotation</label>
				<input
				id="minmax-range"
				type="range"
				min="0"
				max="360"
				class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				v-model="colorAngle"
				>
				<p class="">{{ colorAngle }}&deg;</p>
			</div>

		    <!-- Preview -->
		    <div class="mt-10"> 
		    	<h5 class="font-fredoka-one">Preview:</h5>
		    	<div 
					v-if="selectedType === 'linear-gradient'"
					class="w-full h-[300px] border border-solid border-gray-300 rounded-lg shadow-lg bg-slate-50"
					:style="`background: ${selectedType}(${colorAngle}deg, ${colorEnter} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`"	
				>
				</div>
				<div 
					v-else
					class="w-full h-[300px] border border-solid border-gray-300 rounded-lg shadow-lg bg-slate-50"
					:style="`background: ${selectedType}(${colorEnter} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`"
				>
				<p class="grid justify-items-center text-slate-300 mt-32" v-if="!colorEnter">Ooops! Enter Color Code ;)</p>
		    	</div>
		    </div>

		    <!-- Code -->
		    <div class="mt-10"> 

				<h5 class="font-fredoka-one">Code:</h5>
				<div class="text-emerald-400 bg-slate-700 p-5 rounded-lg flex justify-between">
					
		    		<code id="cssCode" class="" v-if="selectedType === 'linear-gradient'" ref="previewCode" >
						background-color: {{selectedType}}({{ colorAngle }}deg, {{colorEnter}} {{firstColorPosition}}%, {{ secondColor }} {{secondColorPosition}}%);	
					</code>

					<code id="cssCode" class="" v-else>
						background-color: {{selectedType}}({{colorEnter}} {{firstColorPosition}}%, {{ secondColor }} {{secondColorPosition}}%);
					</code>

					
					<button
					 data-clipboard-action="copy" data-clipboard-target="#cssCode"
						
						type="button"
						class=" btn
						w-26
						ml-20 p-3 
						text-gray-900 
						border border-gray-200 focus:text-gray-700 bg-white focus:outline-none
						rounded-lg 
						text-[13px] text-center 
						inline-flex items-center
						">
							<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
							</svg>
							<div class="ml-2">COPY</div>
					</button>
		    	</div>
				
		    </div>

		</div>

		
</div>
</template>


<script setup>
import { ref } from 'vue'
import ClipboardJS from 'clipboard'

const colorEnter = ref('#8DD0FC');
const firstColorPosition = ref(30);
const secondColor = ref('#D289FF');
const secondColorPosition = ref(73);
const selectedType = ref('linear-gradient')
const colorAngle = ref(270);

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
	alert('Copied to clipboard')
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
	console.error(e)
});


</script>

