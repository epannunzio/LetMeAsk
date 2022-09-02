import cx from 'classnames';

import { IQuestionProps } from './@interfaces';

import './question.scss';

export function Question({ content, author, children, isAnswered, isHighlighted }: IQuestionProps) {
  return (
    <div className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}