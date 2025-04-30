document.addEventListener('DOMContentLoaded', function() {
    // Helper functions for animations
    
    // Add entrance animation to elements
    function addEntranceAnimation(elements, delay = 0, stagger = 0.1) {
        if (!elements) return;
        
        if (!Array.isArray(elements)) {
            elements = [elements];
        }
        
        elements.forEach((element, index) => {
            if (!element) return;
            
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Calculate delay for this element
            const elementDelay = delay + (index * stagger);
            
            // Trigger animation after delay
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, elementDelay * 1000);
        });
    }
    
    // Add pulse animation for highlights
    function addPulseAnimation(element) {
        if (!element) return;
        
        // Add CSS class with animation
        element.classList.add('pulse-animation');
        
        // Remove class after animation completes
        setTimeout(() => {
            element.classList.remove('pulse-animation');
        }, 2000);
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .pulse-animation {
            animation: pulse 1s ease-in-out;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); box-shadow: 0 0 10px rgba(31, 111, 235, 0.6); }
            100% { transform: scale(1); }
        }
        
        .stat-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        .stat-card:hover .stat-icon i {
            animation: iconSpin 1s ease-in-out;
        }
        
        @keyframes iconSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .primary-btn, .secondary-btn {
            transition: all 0.3s ease;
        }
        
        .primary-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(31, 111, 235, 0.8);
            animation: buttonGlow 1.5s infinite alternate;
        }
        
        .secondary-btn:hover {
            background-color: rgba(255, 255, 255, 0.15);
            animation: buttonPulse 1.5s infinite alternate;
        }
        
        @keyframes buttonGlow {
            0% { box-shadow: 0 0 10px rgba(31, 111, 235, 0.6); }
            100% { box-shadow: 0 0 20px rgba(31, 111, 235, 0.9); }
        }
        
        @keyframes buttonPulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
    
    // Add entrance animations to forms when page loads
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const formGroups = form.querySelectorAll('.input-group');
        addEntranceAnimation(formGroups, 0.3, 0.1);
    });
    
    // Add entrance animations to stats cards when results are shown
    const statsForm = document.getElementById('stats-form');
    if (statsForm) {
        statsForm.addEventListener('submit', function() {
            setTimeout(() => {
                const statCards = document.querySelectorAll('.stat-card');
                addEntranceAnimation(statCards, 0.5, 0.15);
                
                const chartCards = document.querySelectorAll('.chart-card');
                addEntranceAnimation(chartCards, 1.2, 0.2);
            }, 300);
        });
    }
    
    // Add entrance animations to comparison charts
    const comparisonForm = document.getElementById('comparison-form');
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function() {
            setTimeout(() => {
                const chartCards = document.querySelectorAll('.comparison-charts .chart-card');
                addEntranceAnimation(chartCards, 0.5, 0.2);
                
                const summary = document.querySelector('.comparison-summary');
                addEntranceAnimation(summary, 1.3);
            }, 300);
        });
    }
    
    // Dynamic button hover effects
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            if (button.classList.contains('primary-btn')) {
                button.style.boxShadow = '0 0 10px rgba(31, 111, 235, 0.6)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            if (button.classList.contains('primary-btn')) {
                button.style.boxShadow = 'none';
            }
        });
    });
    
    // Add slide transitions for tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.style.transition = 'all 0.5s ease-in-out';
            });
        });
    });
    
    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
    
    // Animate goal alert with enhanced effects
    window.animateGoalAlert = function() {
        const goalAlert = document.getElementById('goal-alert');
        if (!goalAlert) return;
        
        // Add confetti effect before showing alert
        addConfettiEffect();
        
        goalAlert.style.display = 'block';
        goalAlert.style.opacity = '0';
        goalAlert.style.transform = 'translate(-50%, -50%) scale(0)';
        
        // Trigger animation with enhanced effects
        setTimeout(() => {
            goalAlert.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            goalAlert.style.opacity = '1';
            goalAlert.style.transform = 'translate(-50%, -50%) scale(1)';
            
            // Add subtle movement for dynamic effect
            setTimeout(() => {
                goalAlert.style.animation = 'goalFloatEffect 2s ease-in-out infinite';
            }, 600);
            
            // Hide after a few seconds with nice exit animation
            setTimeout(() => {
                goalAlert.style.opacity = '0';
                goalAlert.style.transform = 'translate(-50%, -50%) scale(0.8) translateY(20px)';
                
                // Remove from DOM after fade out
                setTimeout(() => {
                    goalAlert.style.display = 'none';
                    goalAlert.style.animation = '';
                }, 600);
            }, 4000);
        }, 100);
    };
    
    // Add confetti effect to goal celebrations
    function addConfettiEffect() {
        // Create confetti container if it doesn't exist
        let confettiContainer = document.getElementById('confetti-container');
        if (!confettiContainer) {
            confettiContainer = document.createElement('div');
            confettiContainer.id = 'confetti-container';
            confettiContainer.style.position = 'fixed';
            confettiContainer.style.top = '0';
            confettiContainer.style.left = '0';
            confettiContainer.style.width = '100%';
            confettiContainer.style.height = '100%';
            confettiContainer.style.pointerEvents = 'none';
            confettiContainer.style.zIndex = '9998';
            document.body.appendChild(confettiContainer);
        }
        
        // Create confetti pieces
        const colors = ['#FFC107', '#4CAF50', '#2196F3', '#E91E63', '#9C27B0'];
        const totalConfetti = 150;
        
        confettiContainer.innerHTML = ''; // Clear previous confetti
        
        for (let i = 0; i < totalConfetti; i++) {
            const confetti = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 6 + 3 + 'px';
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = '3px';
            confetti.style.opacity = Math.random() + 0.5;
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            // Random animation duration and delay
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 0.5;
            confetti.style.animation = `confettiFall ${duration}s ease-in ${delay}s forwards`;
            
            confettiContainer.appendChild(confetti);
        }
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confettiContainer.innerHTML = '';
        }, 6000);
        
        // Add confetti animation to document
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confettiFall {
                0% { transform: translateY(0) rotate(0); opacity: 1; }
                70% { opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
            
            @keyframes goalFloatEffect {
                0% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -55%) scale(1.02); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            
            // Update active button
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${target}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Color pickers
    const teamColor = document.getElementById('team-color');
    const teamColorPreview = document.getElementById('color-preview');
    
    if (teamColor && teamColorPreview) {
        teamColorPreview.style.backgroundColor = teamColor.value;
        teamColor.addEventListener('input', () => {
            teamColorPreview.style.backgroundColor = teamColor.value;
        });
    }
    
    const teamAColor = document.getElementById('team-a-color');
    const teamAColorPreview = document.getElementById('color-preview-a');
    
    if (teamAColor && teamAColorPreview) {
        teamAColorPreview.style.backgroundColor = teamAColor.value;
        teamAColor.addEventListener('input', () => {
            teamAColorPreview.style.backgroundColor = teamAColor.value;
        });
    }
    
    const teamBColor = document.getElementById('team-b-color');
    const teamBColorPreview = document.getElementById('color-preview-b');
    
    if (teamBColor && teamBColorPreview) {
        teamBColorPreview.style.backgroundColor = teamBColor.value;
        teamBColor.addEventListener('input', () => {
            teamBColorPreview.style.backgroundColor = teamBColor.value;
        });
    }
    
    // Stats form submission
    const statsForm = document.getElementById('stats-form');
    if (statsForm) {
        statsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const teamName = document.getElementById('team-name').value;
            const teamColor = document.getElementById('team-color').value;
            const matchesPlayed = parseInt(document.getElementById('matches-played').value);
            const goalsScored = parseInt(document.getElementById('goals-scored').value);
            const goalsConceded = parseInt(document.getElementById('goals-conceded').value);
            const shotsTaken = parseInt(document.getElementById('shots-taken').value);
            const shotsOnTarget = parseInt(document.getElementById('shots-on-target').value);
            const yellowCards = parseInt(document.getElementById('yellow-cards').value);
            const redCards = parseInt(document.getElementById('red-cards').value);
            const possession = parseInt(document.getElementById('possession').value);
            const distance = parseFloat(document.getElementById('distance').value);
            const minutesPlayed = parseInt(document.getElementById('minutes-played').value);
            
            // Calculate stats
            const stats = calculateStats(
                matchesPlayed, 
                goalsScored, 
                goalsConceded, 
                shotsTaken, 
                shotsOnTarget, 
                yellowCards, 
                redCards, 
                possession, 
                distance, 
                minutesPlayed
            );
            
            // Update UI with calculated stats
            updateStatsUI(teamName, teamColor, stats);
            
            // Show goal alert animation
            showGoalAlert();
            
            // Show results section
            document.getElementById('results-section').style.display = 'block';
            
            // Scroll to results
            document.getElementById('results-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Comparison form submission
    const comparisonForm = document.getElementById('comparison-form');
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Team A data
            const teamAName = document.getElementById('team-a-name').value;
            const teamAColor = document.getElementById('team-a-color').value;
            const teamAMatches = parseInt(document.getElementById('team-a-matches').value);
            const teamAGoalsScored = parseInt(document.getElementById('team-a-goals-scored').value);
            const teamAGoalsConceded = parseInt(document.getElementById('team-a-goals-conceded').value);
            const teamAShotsTaken = parseInt(document.getElementById('team-a-shots-taken').value);
            const teamAShotsOnTarget = parseInt(document.getElementById('team-a-shots-on-target').value);
            const teamAPossession = parseInt(document.getElementById('team-a-possession').value);
            
            // Team B data
            const teamBName = document.getElementById('team-b-name').value;
            const teamBColor = document.getElementById('team-b-color').value;
            const teamBMatches = parseInt(document.getElementById('team-b-matches').value);
            const teamBGoalsScored = parseInt(document.getElementById('team-b-goals-scored').value);
            const teamBGoalsConceded = parseInt(document.getElementById('team-b-goals-conceded').value);
            const teamBShotsTaken = parseInt(document.getElementById('team-b-shots-taken').value);
            const teamBShotsOnTarget = parseInt(document.getElementById('team-b-shots-on-target').value);
            const teamBPossession = parseInt(document.getElementById('team-b-possession').value);
            
            // Calculate stats for both teams (simplified for comparison)
            const teamAStats = {
                avgGoals: teamAGoalsScored / teamAMatches,
                avgConceded: teamAGoalsConceded / teamAMatches,
                shotAccuracy: (teamAShotsOnTarget / teamAShotsTaken) * 100,
                possession: teamAPossession,
                xG: calculateXG(teamAShotsTaken, teamAShotsOnTarget, teamAGoalsScored),
                defensiveEfficiency: 100 - ((teamAGoalsConceded / teamAMatches) * 20)
            };
            
            const teamBStats = {
                avgGoals: teamBGoalsScored / teamBMatches,
                avgConceded: teamBGoalsConceded / teamBMatches,
                shotAccuracy: (teamBShotsOnTarget / teamBShotsTaken) * 100,
                possession: teamBPossession,
                xG: calculateXG(teamBShotsTaken, teamBShotsOnTarget, teamBGoalsScored),
                defensiveEfficiency: 100 - ((teamBGoalsConceded / teamBMatches) * 20)
            };
            
            // Update comparison UI
            updateComparisonUI(teamAName, teamAColor, teamAStats, teamBName, teamBColor, teamBStats);
            
            // Show comparison results
            document.getElementById('comparison-results').style.display = 'block';
            
            // Scroll to comparison results
            document.getElementById('comparison-results').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Function to calculate statistics
    function calculateStats(matchesPlayed, goalsScored, goalsConceded, shotsTaken, shotsOnTarget, yellowCards, redCards, possession, distance, minutesPlayed) {
        // Expected goals calculation based on shot quality
        const xG = calculateXG(shotsTaken, shotsOnTarget, goalsScored);
        
        // Average goals per match
        const avgGoals = goalsScored / matchesPlayed;
        
        // Shot accuracy percentage
        const shotAccuracy = (shotsOnTarget / shotsTaken) * 100;
        
        // Card probability per match
        const cardProbability = ((yellowCards + (redCards * 2)) / matchesPlayed) * 10;
        
        // Average possession
        const avgPossession = possession;
        
        // Distance per match in km
        const distancePerMatch = distance / matchesPlayed;
        
        // Average speed calculation (km/h)
        const totalHours = minutesPlayed / 60;
        const avgSpeed = distance / totalHours;
        
        // Defensive efficiency (inverted scale of goals conceded)
        const defensiveEfficiency = 100 - ((goalsConceded / matchesPlayed) * 20);
        
        return {
            xG,
            avgGoals,
            shotAccuracy,
            cardProbability,
            avgPossession,
            distancePerMatch,
            avgSpeed,
            defensiveEfficiency
        };
    }
    
    // Helper function to calculate expected goals (xG)
    function calculateXG(shotsTaken, shotsOnTarget, goalsScored) {
        // This is a simplified model for xG
        // Real xG models use shot location, angle, defensive pressure, etc.
        const shotQuality = shotsOnTarget / shotsTaken;
        const conversionRate = goalsScored / shotsOnTarget;
        
        // Higher weights for better quality shots
        return (shotQuality * 0.4 + conversionRate * 0.6) * shotsTaken * 0.1;
    }
    
    // Update UI with calculated stats
    function updateStatsUI(teamName, teamColor, stats) {
        // Update team info
        document.getElementById('result-team-name').textContent = teamName;
        const teamBadge = document.getElementById('team-badge');
        teamBadge.style.color = teamColor;
        document.getElementById('team-initial').textContent = teamName.charAt(0).toUpperCase();
        
        // Update stat values
        document.getElementById('xg-value').textContent = stats.xG.toFixed(2);
        document.getElementById('avg-goals-value').textContent = stats.avgGoals.toFixed(2);
        document.getElementById('shot-accuracy-value').textContent = stats.shotAccuracy.toFixed(0) + '%';
        document.getElementById('card-probability-value').textContent = stats.cardProbability.toFixed(0) + '%';
        document.getElementById('avg-possession-value').textContent = stats.avgPossession + '%';
        document.getElementById('distance-per-match-value').textContent = stats.distancePerMatch.toFixed(2) + ' km';
        document.getElementById('avg-speed-value').textContent = stats.avgSpeed.toFixed(2) + ' km/h';
        document.getElementById('defensive-efficiency-value').textContent = stats.defensiveEfficiency.toFixed(0) + '%';
        
        // Create stats chart
        createStatsChart(stats, teamName, teamColor);
    }
    
    // Update comparison UI
    function updateComparisonUI(teamAName, teamAColor, teamAStats, teamBName, teamBColor, teamBStats) {
        // Update team info in the comparison section
        document.getElementById('comp-team-a-name').textContent = teamAName;
        document.getElementById('comp-team-b-name').textContent = teamBName;
        
        document.getElementById('team-a-dot').style.backgroundColor = teamAColor;
        document.getElementById('team-b-dot').style.backgroundColor = teamBColor;
        
        // Create comparison charts
        createComparisonCharts(teamAName, teamAColor, teamAStats, teamBName, teamBColor, teamBStats);
        
        // Generate and update comparison summary
        const summary = generateComparisonSummary(teamAName, teamAStats, teamBName, teamBStats);
        document.getElementById('comparison-summary-text').innerHTML = summary;
    }
    
    // Generate comparison summary text
    function generateComparisonSummary(teamAName, teamAStats, teamBName, teamBStats) {
        let summary = '<p>';
        
        // Compare goals
        if (teamAStats.avgGoals > teamBStats.avgGoals) {
            summary += `<strong>${teamAName}</strong> muestra mayor eficacia ofensiva con un promedio de ${teamAStats.avgGoals.toFixed(2)} goles por partido, comparado con los ${teamBStats.avgGoals.toFixed(2)} de <strong>${teamBName}</strong>. `;
        } else if (teamBStats.avgGoals > teamAStats.avgGoals) {
            summary += `<strong>${teamBName}</strong> muestra mayor eficacia ofensiva con un promedio de ${teamBStats.avgGoals.toFixed(2)} goles por partido, comparado con los ${teamAStats.avgGoals.toFixed(2)} de <strong>${teamAName}</strong>. `;
        } else {
            summary += `Ambos equipos muestran igual eficacia ofensiva con ${teamAStats.avgGoals.toFixed(2)} goles por partido. `;
        }
        
        // Compare shot accuracy
        if (teamAStats.shotAccuracy > teamBStats.shotAccuracy) {
            summary += `La precisión de tiros de <strong>${teamAName}</strong> (${teamAStats.shotAccuracy.toFixed(0)}%) supera a la de <strong>${teamBName}</strong> (${teamBStats.shotAccuracy.toFixed(0)}%). `;
        } else if (teamBStats.shotAccuracy > teamAStats.shotAccuracy) {
            summary += `La precisión de tiros de <strong>${teamBName}</strong> (${teamBStats.shotAccuracy.toFixed(0)}%) supera a la de <strong>${teamAName}</strong> (${teamAStats.shotAccuracy.toFixed(0)}%). `;
        } else {
            summary += `Ambos equipos tienen la misma precisión de tiros (${teamAStats.shotAccuracy.toFixed(0)}%). `;
        }
        
        summary += '</p><p>';
        
        // Compare xG
        if (teamAStats.xG > teamBStats.xG) {
            summary += `El indicador de goles esperados (xG) favorece a <strong>${teamAName}</strong> con ${teamAStats.xG.toFixed(2)} xG frente a ${teamBStats.xG.toFixed(2)} xG de <strong>${teamBName}</strong>, sugiriendo mejor calidad en sus oportunidades de gol. `;
        } else if (teamBStats.xG > teamAStats.xG) {
            summary += `El indicador de goles esperados (xG) favorece a <strong>${teamBName}</strong> con ${teamBStats.xG.toFixed(2)} xG frente a ${teamAStats.xG.toFixed(2)} xG de <strong>${teamAName}</strong>, sugiriendo mejor calidad en sus oportunidades de gol. `;
        } else {
            summary += `Ambos equipos muestran similar calidad en sus oportunidades con ${teamAStats.xG.toFixed(2)} xG. `;
        }
        
        // Compare possession
        const possessionDiff = Math.abs(teamAStats.possession - teamBStats.possession);
        if (possessionDiff > 5) {
            if (teamAStats.possession > teamBStats.possession) {
                summary += `<strong>${teamAName}</strong> domina la posesión con un ${teamAStats.possession}% frente al ${teamBStats.possession}% de <strong>${teamBName}</strong>.`;
            } else {
                summary += `<strong>${teamBName}</strong> domina la posesión con un ${teamBStats.possession}% frente al ${teamAStats.possession}% de <strong>${teamAName}</strong>.`;
            }
        } else {
            summary += `La posesión está bastante equilibrada entre ambos equipos (${teamAStats.possession}% vs ${teamBStats.possession}%).`;
        }
        
        summary += '</p>';
        
        return summary;
    }
    
    // Show goal alert animation
    function showGoalAlert() {
        window.animateGoalAlert();
    }
});