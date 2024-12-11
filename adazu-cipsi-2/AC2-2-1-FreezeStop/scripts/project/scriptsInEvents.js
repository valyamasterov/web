


const scriptsInEvents = {

	async Registration_Event1(runtime, localVars)
	{
		var phone = document.getElementById('phoneInput');
		
		if (phone.value.length > 8) {
			phone.value = phone.value.substring(0, 8);
		}
	},

	async Registration_Event20(runtime, localVars)
	{
		    // Concatenate parameters into a string
		    const messageToHash = "fairplay" + String(runtime.globalVars.sessionScore);
		
		  const msgUint8 = new TextEncoder().encode(messageToHash); // encode as (utf-8) Uint8Array
		  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
		  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
		  const hashHex = hashArray
		    .map((b) => b.toString(16).padStart(2, "0"))
		    .join(""); // convert bytes to hex string
		  
		runtime.globalVars.hashParameter = hashHex;
	},

	async Registration_Event25(runtime, localVars)
	{
		const messageToHash = String(runtime.objects.nameInput) + String(runtime.objects.phoneInput) + String(runtime.globalVars.sessionScore);
		
		// Convert the string to a Uint8Array
		const encoder = new TextEncoder();
		const data = encoder.encode(messageToHash);
		
		// Generate SHA-256 hash
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
		
		runtime.globalVars.hashParameter = hash;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

