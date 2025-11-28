import React, { useState, useCallback, useRef } from 'react';
import { LogOut, LogIn, Gamepad2, Skull, Sparkles, Brain, Megaphone } from 'lucide-react';
import Background from './components/Background';
import GlassCard from './components/GlassCard';
import ActionButton from './components/ActionButton';
import Notification from './components/Notification';
import { NotificationState, ActionType } from './types';

const App: React.FC = () => {
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const showNotification = useCallback((message: string, subMessage: string, type: NotificationState['type']) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    setNotification({
      id: Date.now(),
      message,
      subMessage,
      type
    });

    timeoutRef.current = window.setTimeout(() => {
      setNotification(null);
    }, 4000);
  }, []);

  const handleAction = (action: ActionType) => {
    switch (action) {
      case ActionType.LEAVE:
        showNotification(
          "탈갤 완료",
          "성공적으로 커뮤니티에서 탈출했습니다. 이제 현생을 살아보세요. 밝은 미래가 기다립니다.",
          "success"
        );
        break;
      case ActionType.RETURN:
        showNotification(
          "복귀 완료",
          "결국 다시 돌아오셨군요. 어차피 여기밖에 갈 곳이 없다는 걸 알고 있었습니다. 환영합니다.",
          "warning"
        );
        break;
      case ActionType.PLAY:
        showNotification(
          "게임 시작",
          "협곡으로, 혹은 전장으로 떠납니다. 승리의 영광이 함께하길 빕니다. 즐겜하세요.",
          "info"
        );
        break;
      case ActionType.QUIT:
        showNotification(
          "능지 상승",
          "게임을 접으셨습니다. 스트레스에서 해방되었습니다. 탁월한 선택입니다.",
          "error"
        );
        break;
      case ActionType.INSIGHT:
        showNotification(
          "통찰 완료",
          "우주의 진리를 어렴풋이 깨달았습니다. 물론 당신의 인생이 바뀌는 것은 아닙니다.",
          "discovery"
        );
        break;
      case ActionType.WHINE:
        showNotification(
          "징징 완료",
          "실컷 징징거렸습니다. 아무도 듣지 않았지만, 속은 조금 후련해졌을지도 모릅니다.",
          "shout"
        );
        break;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-16 px-4 sm:py-20 sm:px-8">
      <Background />
      
      <main className="w-full max-w-2xl mx-auto z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
                 <Sparkles size={14} className="text-purple-300" />
                 <span className="text-xs font-medium text-purple-200 uppercase tracking-widest">Simulator v1.1</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tight drop-shadow-2xl">
            탈갤 시뮬레이터
            </h1>
            <p className="text-lg text-white/60 font-light max-w-md mx-auto leading-relaxed">
            망설이지 말고 선택하세요. <br className="hidden sm:block"/>
            당신의 다음 행동이 운명을 결정합니다.
            </p>
        </div>

        {/* Card Section */}
        <GlassCard className="w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ActionButton 
                    icon={LogOut} 
                    label="탈갤하기" 
                    onClick={() => handleAction(ActionType.LEAVE)}
                    colorClass="hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
                    delay={0.1}
                />
                <ActionButton 
                    icon={LogIn} 
                    label="돌아오기" 
                    onClick={() => handleAction(ActionType.RETURN)}
                    colorClass="hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
                    delay={0.2}
                />
                <ActionButton 
                    icon={Gamepad2} 
                    label="겜하기" 
                    onClick={() => handleAction(ActionType.PLAY)}
                    colorClass="hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
                    delay={0.3}
                />
                <ActionButton 
                    icon={Skull} 
                    label="겜접기" 
                    onClick={() => handleAction(ActionType.QUIT)}
                    colorClass="hover:border-rose-500/50 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]"
                    delay={0.4}
                />
                <ActionButton 
                    icon={Brain} 
                    label="통찰하기" 
                    onClick={() => handleAction(ActionType.INSIGHT)}
                    colorClass="hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]"
                    delay={0.5}
                />
                <ActionButton 
                    icon={Megaphone} 
                    label="징징대기" 
                    onClick={() => handleAction(ActionType.WHINE)}
                    colorClass="hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
                    delay={0.6}
                />
            </div>
        </GlassCard>

        <footer className="mt-24 text-white/30 text-sm font-light">
            © 2024 Tal-Gal Simulator. All choices are yours.
        </footer>
      </main>

      <Notification 
        notification={notification} 
        onClose={() => setNotification(null)} 
      />
    </div>
  );
};

export default App;