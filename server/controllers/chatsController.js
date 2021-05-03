//chatsController
module.exports = {
    getChats: (req,res) =>{
        const db = req.app.get('db')
        db.get_chats()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
    },
    addChatReply: (req, res) => {
        const db = req.app.get('db');
        const { match_id,chat_content,user_id,time_stamp} = req.body;

             db.create_chat(match_id,chat_content,user_id, time_stamp)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    updateChatReply: (req,res) => {
        const db = req.app.get('db');
        const {chat_id} =req.params
        const {chat_content}= req.body;

        db.edit_chat_reply(chat_id,chat_content)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    deleteChatReply: (req,res) =>{
        const db = req.app.get('db');
        const {chat_id} =req.params

    db.delete_chat_reply(chat_id)
    .then(dbRes=> {
    res.status(200).send(dbRes)
    })
    .catch(err => console.log(err))
    }
}