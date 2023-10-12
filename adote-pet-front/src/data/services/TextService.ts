export const TextService = {
    limitText(text: string, tamMax: number): string{
        if (text.length < tamMax) {
            return text;
        }
        return text.slice(0,tamMax) + '...';
    }
}