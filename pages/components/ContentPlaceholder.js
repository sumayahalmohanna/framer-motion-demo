import { v4 as uuid4 } from 'uuid'

const Word = ({ width }) => {
  return (
    <div className="word" style={{ width }} />
  );
}

const Paragraph = ({ words }) => {
  return (
    <div className="paragraph">
      {words.map(width => (
        <Word key={uuid4()} width={width} />
      ))}
    </div>
  );
}

const ContentPlaceholder = () => {
  return  (
    <div className="content-placeholder">
      <div className="header">
        <Word width={75} />
        <Word width={245} />
        <Word width={120} />
      </div>
      <Paragraph words={[51, 71, 37, 27, 48, 52, 95, 80, 38, 67, 41, 55]} />
      <Paragraph words={[44, 82, 32, 50, 40, 26, 76, 36, 36, 77, 67, 93, 56, 75, 25, 94, 40, 64, 50, 78, 35, 55, 31]} />
      <Paragraph words={[83, 89, 77, 73, 67, 53, 52, 54, 22, 46, 50, 34, 48, 65, 31, 44, 50, 92, 64, 77, 42]} />
      <Paragraph words={[63, 61, 90, 25, 84, 92, 27, 35, 91, 21, 97, 48, 79, 38, 77, 89, 21, 71, 95, 55, 71, 67, 92, 92, 24, 48, 30, 65, 43]} />
      <Paragraph words={[89, 49, 56, 70, 45, 59, 68, 56, 67, 58, 51, 85, 22, 97, 74, 83, 34, 55, 74, 88, 59, 31, 51, 63, 53, 75, 37, 31, 22]} />
      <Paragraph words={[93, 58, 48, 89, 64, 25, 77, 74, 51, 92, 69, 94, 79, 70, 79, 86]} />
      <Paragraph words={[56, 22, 98, 94, 63, 95, 41, 81, 91, 31]} />
      <Paragraph words={[51, 71, 37, 27, 48, 52, 95, 80, 38, 67, 41, 55]} />
      <Paragraph words={[44, 82, 32, 50, 40, 26, 76, 36, 36, 77, 67, 93, 56, 75, 25, 94, 40, 64, 50, 78, 35, 55, 31]} />
      <Paragraph words={[83, 89, 77, 73, 67, 53, 52, 54, 22, 46, 50, 34, 48, 65, 31, 44, 50, 92, 64, 77, 42]} />
      <Paragraph words={[63, 61, 90, 25, 84, 92, 27, 35, 91, 21, 97, 48, 79, 38, 77, 89, 21, 71, 95, 55, 71, 67, 92, 92, 24, 48, 30, 65, 43]} />
      <Paragraph words={[89, 49, 56, 70, 45, 59, 68, 56, 67, 58, 51, 85, 22, 97, 74, 83, 34, 55, 74, 88, 59, 31, 51, 63, 53, 75, 37, 31, 22]} />
      <Paragraph words={[93, 58, 48, 89, 64, 25, 77, 74, 51, 92, 69, 94, 79, 70, 79, 86]} />
      <Paragraph words={[56, 22, 98, 94, 63, 95, 41, 81, 91, 31]} />
    </div>
  );
}

export default ContentPlaceholder;