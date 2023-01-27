<template>
<div class="">
		<!-- Title -->
		<div class="mb-10 text-center">
			<h2 class="font-bold text-5xl font-fredoka-one">CSS Gradient Maker</h2>
			<p class="mt-2 font-nunito-sans">"Effortlessly elevate your website with stunning gradient styles."</p>
		</div> 

		<div class="w-full">
		<div class="flex flex-row flex-wrap justify-center lg:gap-28 gap-4">
			<section class="w-[500px]">
			<!-- Input Color -->
			<div class="flex gap-4" v-for="(colorValues, index) in colorInput" :key="index">
				<div class="relative w-full mt-7">
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
				v-model="colorValues.color"
				/>
				<div 
					class="absolute bottom-[10%] left-[80%] w-12 h-12 border border-solid border-gray-300 rounded-lg"
					:style="`background-color:${colorValues.color};`" disabled></div>
				</div>

				<!-- Color Position-->
				<div class="mt-7">
					<label for="firstColorPosition" class="form-label inline-block mb-2 text-gray-700 font-fredoka-one">Position</label>
					<input
					v-model="colorValues.position"
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
				<!-- Delete -->
				<div @click="deleteColorInput(index)" class="grid content-center mt-16 hover:text-red-400" >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
				</div>
			</div>

			<!-- Add Color -->
			<div class="flex justify-center mt-7">
				<button @click="addColorInput" class="inline-flex items-center justify-center w-full px-3
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

			</section>

			<section class="w-[600px]">
			<!-- Preview -->
		    <div v-if="selectedType === 'linear-gradient'">
				<h5 class="font-fredoka-one mt-7">Preview:</h5>
		    	<div 
				 	:style="`background: ${gradient}`" 
					class="w-full h-[300px] border border-solid border-gray-300 rounded-lg shadow-lg bg-slate-50"
				>
				<p class="grid justify-items-center text-slate-300 mt-32" v-if="!gradient">Ooops! Enter Color Code ;)</p>
				</div>
			</div>
		    <div class="mt-10" v-else> 
				<h5 class="font-fredoka-one mt-7">Preview:</h5>
				<div 
					:style="`background: ${gradientRadial}`" 
					class="w-full h-[300px] border border-solid border-gray-300 rounded-lg shadow-lg bg-slate-50"
			   	>
			   <p class="grid justify-items-center text-slate-300 mt-32" v-if="!gradient">Ooops! Enter Color Code ;)</p>
			   </div>
		    </div>

		    <!-- Code -->
		    <div class="mt-10"> 

				<h5 class="font-fredoka-one">Code:</h5>
				<div class="text-emerald-400 bg-slate-700 p-5 rounded-lg flex justify-between" >
					<code id="cssCode" class="" v-if="selectedType === 'linear-gradient'">
						background: {{selectedType}}({{ colorAngle }}deg, 
						<span v-for="(colorValues, index) in colorInput" :key="index" >
							{{ colorValues.color }} {{ colorValues.position }}%{{ (index+1 < colorInput.length) ? ', ' : '' }}
						</span>);	
					</code>
					
					<code id="cssCode" class="" v-else>
						background: {{selectedType}}(<span v-for="(colorValues, index) in colorInput" :key="index">
							{{ colorValues.color }} {{ colorValues.position }}%{{ (index+1 < colorInput.length) ? ', ' : '' }}
						</span>);
					</code> 
					
					<button
					 data-clipboard-action="copy" data-clipboard-target="#cssCode"
					 @click="$refs.alert
        .showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'Copied to clipboard', // Size of the icon (px)
        )"
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
			</section>
		</div>
		</div>
		
		
    <vue-basic-alert 
       :duration="300" 
       :closeIn="2000"
       ref="alert" />

</div>
</template>


<script setup>
import { computed, ref } from 'vue'
import ClipboardJS from 'clipboard'
import VueBasicAlert from 'vue-basic-alert'
// Notif



const selectedType = ref('linear-gradient')
const colorAngle = ref(270);


// Clipboard Button

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
	console.error(e)
});


// Add Input Color

const colorInput = ref([
	{ color: '#8DD0FC' , position: 30},
	{ color: '#D289FF' , position: 73},
])

const addColorInput = () => {
	colorInput.value.push({color: '#e263af' , position: 20})
}

const deleteColorInput = (index) => {
	colorInput.value.splice(index, 1)
	console.log(index)
}

// Dynamic Preview

const gradient = computed(() => {

	let colors = selectedType.value + '(' + colorAngle.value + 'deg';
	colorInput.value.forEach((item) => {
		
		colors += ', ' + item.color + ' ' + item.position + '%';

	})
	colors += ");";
	return colors
	
});


const gradientRadial = computed(() => {

let colorsRadial = 'radial-gradient(';
colorInput.value.forEach((item, index) => {
	
	colorsRadial += ' ' + item.color + ' ' + item.position + '%' + (index+1 < colorInput.value.length ? ', ' : '');
});

colorsRadial += ");";
console.log(colorsRadial)
return colorsRadial

})

</script>

