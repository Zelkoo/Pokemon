export const getButtonTypeClass = (typeName: string): string => {
  switch(typeName) {
    case 'grass':
      return 'grass-button';
    case 'fire':
      return 'fire-button';
    case 'bug':
      return 'bug-button';
    case 'flying':
      return 'flying-button';
    case 'water':
      return 'water-button';
    case 'electric':
      return 'electric-button';
    case 'poison':
      return 'poison-button';
    default:
      return '';
  }
}
