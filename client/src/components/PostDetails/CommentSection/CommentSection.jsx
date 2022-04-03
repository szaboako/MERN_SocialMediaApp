import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { commentPost } from '../../../actions/posts'
import useStyles from './styles'

const CommentSection = (post) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const commentsRef = useRef()
    const user = JSON.parse(localStorage.getItem('profile'))
    const [comments, setComments] = useState(post?.post?.comments)
    const [comment, setComment] = useState('')

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`

        const newComments = await dispatch(commentPost(finalComment, post.post._id))

        setComments(newComments)
        setComment('')

        commentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((comment, index) => (
                        <Typography key={index} gutterBottom variant="subtitle1">
                            <strong>{comment.split(': ')[0] + ':'}</strong>
                            {comment.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef}/>
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%' }}>
                    <Typography gutterBottom variant="h6">Write a Comment</Typography>
                    <TextField 
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                        Comment
                    </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommentSection