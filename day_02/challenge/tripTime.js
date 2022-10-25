// function arrInception(parentArr) {
//     for (let i = 0; i < parentArr.length; i++) {
//       let childArr = parentArr[i]
//       for (let j = 0; j < childArr.length; j++) {
//         console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
//       }
//     }
//   }

const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }
    const segmentTime = (arr) => {
        for (obj in arr) {
            let arr2 = obj.speedLimit;
            for (let i = 0; i < arr2.length; i++) {
                let val = obj.speedLimits[i].distance / obj.speedLimits[i].speedLimit;
                result[0].segmentTimes += val;
            }
        }       
    }
    segmentTime();
    return result.segmentTimes;
    // return result;
}

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]

console.table(tripTime(stops));
