// В методе sendReward() класса BlockBlastGame замените на это:

sendReward() {
    const urlParams = new URLSearchParams(window.location.search);
    const botUsername = urlParams.get('bot') || 'FernieXZBTBot';
    
    // Формируем данные в формате: BB_score_lines_combo_pieces
    const startParam = `BB_${this.score}_${this.clearedLines}_${this.maxCombo}_${this.piecesPlaced}`;
    
    console.log('=== SENDING REWARD ===');
    console.log('Bot username:', botUsername);
    console.log('Start param:', startParam);
    console.log('Param length:', startParam.length);
    
    // Проверяем длину (должна быть < 64)
    if (startParam.length > 64) {
        console.error('ERROR: Parameter too long!', startParam.length);
        alert('⚠️ Слишком высокий счёт для отправки.\nСыграйте с меньшим результатом.');
        return;
    }
    
    // Формируем ссылку на бота
    const botUrl = `https://t.me/${botUsername}?start=${startParam}`;
    
    console.log('Bot URL:', botUrl);
    console.log('Opening bot...');
    
    // Открываем бота
    const opened = window.open(botUrl, '_blank');
    
    if (!opened) {
        console.warn('Popup blocked, trying location.href');
        window.location.href = botUrl;
    }
    
    console.log('=== REWARD SENT ===');
}
