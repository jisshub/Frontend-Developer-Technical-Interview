const Exam = {
    subject: '',
    duration: '',
    date: '',
    combine: function (rooms) {
        return this.subject + ' ' + this.duration + ' ' + this.date + ' ' + rooms
    }
}

const examDetails = Exam.combine.apply({
    subject: 'history',
    duration: '2 hr',
    date: 'jan 10'
}, 
['room30']
);

console.log(examDetails)