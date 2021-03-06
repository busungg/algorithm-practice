function solution(array, commands) {
    var answer = [];

    let command, sliceArray;
    while(commands.length !== 0) {
        command = commands.shift();
        sliceArray = array.slice(command[0] - 1, command[1]);
        sliceArray.sort((a,b)=> {
            return a - b;
        });

        answer.push(sliceArray[command[2] - 1]);
    }

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));