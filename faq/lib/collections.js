/**
 * Created by goku on 2/19/16.
 */
Questions = new Mongo.Collection('questions', {});

Questions.attachSchema(new SimpleSchema({
    question: {
        type: String,
        label: 'Question',
        max: 500,
        optional: false
    },
    answer: {
        type: String,
        label: 'Answer',
        optional: false
    }
}));