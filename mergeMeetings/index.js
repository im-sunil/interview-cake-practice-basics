let meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
];

/*
- new copy of meetings
- sort by asc
- get first meeting stored in first element
- loop through sorted meetings
    get current meeting
    get last meeting





*/
console.log(mergeRange(meetings));

function mergeRange(meetings) {
    let meetingCopy = [...meetings];

    let sortedMettings = meetingCopy.sort((a, b) => a.startTime - b.startTime);

    let mergeMeetings = [sortedMettings[0]];

    let length = sortedMettings.length;

    for (let i = 1; i < length; i++) {
        let currentMeeting = sortedMettings[i];

        let lastMergeMeeting = mergeMeetings[mergeMeetings.length - 1];

        if (currentMeeting.startTime <= lastMergeMeeting.endTime) {
            lastMergeMeeting.endTime = Math.max(
                lastMergeMeeting.endTime,
                currentMeeting.endTime
            );
        } else {
            mergeMeetings.push(currentMeeting);
        }
    }

    return mergeMeetings;
}
