let currentStep = 1;
const totalSteps = 5;

function switchRole(role) {
    const rolePages = {
        'recorder': 'AI工作流助手.html',
        'nurse': 'nurse.html',
        'doctor': 'doctor.html',
        'finance': 'finance.html',
        'logistics': 'logistics.html',
        'director': 'director.html'
    };
    
    if (role !== 'doctor') {
        window.location.href = rolePages[role];
    }
}

// 工作入口点击事件处理
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.entry-card').forEach(card => {
        card.addEventListener('click', function() {
            showWorkflow(this.id);
        });
    });
});

function showWorkflow(entryId) {
    const welcomePanel = document.getElementById('welcome-panel');
    const workflowView = document.getElementById('workflow-view');
    
    if (welcomePanel && workflowView) {
        welcomePanel.style.display = 'none';
        workflowView.style.display = 'flex';
        
        // 根据不同的入口显示不同的工作流程
        switch(entryId) {
            case 'care-plan-entry':
                showCarePlanWorkflow();
                break;
            case 'orders-entry':
                showOrdersWorkflow();
                break;
            case 'vitals-entry':
                showVitalsWorkflow();
                break;
            case 'risk-entry':
                showRiskWorkflow();
                break;
            case 'health-records-entry':
                showHealthRecordsWorkflow();
                break;
        }
    }
}

function showCarePlanWorkflow() {
    const workflowView = document.getElementById('workflow-view');
    workflowView.innerHTML = `
        <div class="workflow-header">
            <div class="workflow-title">
                <h2>护理计划制定</h2>
                <p>为患者制定个性化护理计划</p>
            </div>
        </div>
        <div class="workflow-body">
            <div class="step-progress">
                <div class="progress-bar">
                    <div class="progress" style="width: 20%"></div>
                </div>
                <div class="step-indicators">
                    <div class="step active">
                        <div class="step-number">1</div>
                        <span>患者信息</span>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <span>评估结果</span>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <span>护理项目</span>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <span>用药计划</span>
                    </div>
                    <div class="step">
                        <div class="step-number">5</div>
                        <span>确认提交</span>
                    </div>
                </div>
            </div>

            <div class="ai-message">
                <i class="fas fa-robot"></i>
                <div class="message-content">
                    <p>我已经根据患者的历史数据和最新评估结果，为您生成了一份护理计划建议。请查看并根据需要进行调整。</p>
                </div>
            </div>

            <div class="care-plan-form">
                <div class="care-items-grid">
                    <div class="care-item-card">
                        <input type="checkbox" id="care-item-1" checked>
                        <label class="card-content" for="care-item-1">
                            <div class="text-content">
                                <span>血压监测</span>
                                <small>每日三次</small>
                            </div>
                            <i class="fas fa-heartbeat"></i>
                        </label>
                    </div>
                    <div class="care-item-card">
                        <input type="checkbox" id="care-item-2" checked>
                        <label class="card-content" for="care-item-2">
                            <div class="text-content">
                                <span>血糖监测</span>
                                <small>每日两次</small>
                            </div>
                            <i class="fas fa-tint"></i>
                        </label>
                    </div>
                    <div class="care-item-card">
                        <input type="checkbox" id="care-item-3">
                        <label class="card-content" for="care-item-3">
                            <div class="text-content">
                                <span>康复训练</span>
                                <small>每周三次</small>
                            </div>
                            <i class="fas fa-walking"></i>
                        </label>
                    </div>
                    <div class="care-item-card">
                        <input type="checkbox" id="care-item-4">
                        <label class="card-content" for="care-item-4">
                            <div class="text-content">
                                <span>营养指导</span>
                                <small>每周一次</small>
                            </div>
                            <i class="fas fa-apple-alt"></i>
                        </label>
                    </div>
                </div>
            </div>

            <div class="step-navigation">
                <button class="nav-btn prev">
                    <i class="fas fa-arrow-left"></i>
                    上一步
                </button>
                <button class="nav-btn next">
                    下一步
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    // 添加导航按钮事件监听
    const prevBtn = workflowView.querySelector('.nav-btn.prev');
    const nextBtn = workflowView.querySelector('.nav-btn.next');
    
    prevBtn.addEventListener('click', () => navigateStep(-1));
    nextBtn.addEventListener('click', () => navigateStep(1));
}

function navigateStep(direction) {
    const newStep = currentStep + direction;
    
    if (newStep >= 1 && newStep <= totalSteps) {
        currentStep = newStep;
        updateProgress();
    }
}

function updateProgress() {
    const progress = document.querySelector('.progress');
    const steps = document.querySelectorAll('.step');
    
    if (progress && steps) {
        const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progress.style.width = `${progressWidth}%`;
        
        steps.forEach((step, index) => {
            if (index + 1 < currentStep) {
                step.classList.remove('active');
                step.classList.add('completed');
            } else if (index + 1 === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }
}

function showOrdersWorkflow() {
    // 实现医嘱管理工作流程
    console.log('显示医嘱管理工作流程');
}

function showVitalsWorkflow() {
    // 实现生命体征监控工作流程
    console.log('显示生命体征监控工作流程');
}

function showRiskWorkflow() {
    // 实现风险评估工作流程
    console.log('显示风险评估工作流程');
}

function showHealthRecordsWorkflow() {
    // 实现健康档案工作流程
    console.log('显示健康档案工作流程');
} 