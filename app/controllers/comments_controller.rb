class CommentsController < ApplicationController
    def create
        @post = Post.find params[:post_id]
        comment_params = params.require(:comment).permit(:body)
        @comment = Comment.new comment_params
        @comment.post = @post
        
        # @review.user = @current_user
        
        if @comment.save
          redirect_to post_path(@post), notice: 'Comment created'
        else
          render '/posts/show'
        end
    end

    def destroy
        @comment = Comment.find params[:id]
        
          @comment.delete
          redirect_to post_path(@comment.post)
        
     end

end
