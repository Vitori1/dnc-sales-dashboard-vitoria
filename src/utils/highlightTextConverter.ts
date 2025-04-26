/**
 * Converts text from highlight a
 * @param text - Text to be converted
 * @returns Converted text
 */
export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '*Meta longe de ser batida'
    case 'success':
      return '* Ameta do mês foi batida! Parabéns'
    case 'warning':
      return '* Falta pouco, vamos lá!'
    default:
      return '* Sem dados no momento'
  }
}
