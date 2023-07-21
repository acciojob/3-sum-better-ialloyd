function threeSum(arr, target) {
// write your code here

	arr.sort((a,b)=>a-b);

	let closestSum=Infinity;

	for(let i=0; i<arr.length-2; i++){

		let left=i+1, right=arr.length-1;
		
		while(left<right){
			
			let currentSum=arr[i]+arr[left]+arr[right];
			
			if(Math.abs(currentSum-target)<Math.abs(closestSum-target)){

				closestSum=currentSum;
			}
			else if(currentSum>target){

					right--;
				
			}
			else{

				left++;
			}
			
			
		}

		
	}

	return closestSum;
  
}

module.exports = threeSum;
