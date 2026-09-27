/* ==========================================================================
   SMART MOBILE TOOLKIT - ADVANCED GLOBAL SEARCH & SYSTEM CONTROLLER
   ========================================================================== */

// 1. EARLY THEME INITIALIZATION (Prevents Light/Dark Flicker)
(function initTheme() {
    const savedTheme = localStorage.getItem('toolkit_theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
})();

// Toggle theme function
window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('toolkit_theme', newTheme);
    updateThemeToggleIcons();
};

function updateThemeToggleIcons() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const btns = document.querySelectorAll('.theme-toggle-btn');
    btns.forEach(btn => {
        btn.innerHTML = currentTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        btn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`);
    });
}

const TOOL_INDEX = [
    {
        id: 'studio',
        title: 'Photo Studio',
        url: 'studio.html',
        icon: 'fa-wand-magic-sparkles',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Edit image, apply filters, crop, flip, rotate, adjust brightness & contrast online.',
        keywords: ['photo', 'studio', 'edit', 'image', 'picture', 'crop', 'filters', 'effects', 'editor', 'rotation', 'flip', 'brightness', 'contrast', 'png', 'jpg']
    },
    {
        id: 'cutter',
        title: 'Audio Cutter',
        url: 'cutter.html',
        icon: 'fa-scissors',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Trim MP3 audio, cut music tracks, make ringtones, split sound files.',
        keywords: ['audio', 'cutter', 'mp3', 'trimmer', 'ringtone', 'maker', 'slice', 'split', 'music', 'sound', 'editor', 'wav', 'aac']
    },
    {
        id: 'vid2aud',
        title: 'Video to Audio',
        url: 'vid2aud.html',
        icon: 'fa-file-audio',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Extract MP3 audio track from MP4 video files offline in seconds.',
        keywords: ['video', 'audio', 'mp4 to mp3', 'converter', 'extract', 'sound', 'rip', 'video converter', 'soundtrack']
    },
    {
        id: 'trimmer',
        title: 'Video Trimmer',
        url: 'trimmer.html',
        icon: 'fa-video',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Cut, slice, and trim MP4 video clips directly in browser.',
        keywords: ['video', 'trimmer', 'mp4', 'cutter', 'crop', 'slice', 'split', 'clip', 'editor', 'movie']
    },
    {
        id: 'compressor',
        title: 'File Compressor',
        url: 'compressor.html',
        icon: 'fa-file-zipper',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Compress images, PDF documents, and reduce file sizes fast.',
        keywords: ['compressor', 'zip', 'reduce', 'size', 'compress', 'archive', 'shrink', 'pdf', 'image', 'photo', 'file size']
    },
    {
        id: 'format',
        title: 'Format Converter',
        url: 'format.html',
        icon: 'fa-file-image',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Convert JPG, PNG, WebP image formats, resize for PAN card & passport.',
        keywords: ['format', 'converter', 'jpg', 'png', 'webp', 'pan card', 'passport', 'resize', 'crop', 'image converter', 'photo resize']
    },
    {
        id: 'pdf',
        title: 'PDF Manager',
        url: 'pdf.html',
        icon: 'fa-file-pdf',
        category: 'management',
        categoryLabel: 'Smart Management',
        description: 'Merge, split, rotate, duplicate, and convert images to PDF documents.',
        keywords: ['pdf', 'manager', 'merge', 'split', 'extract', 'rotate', 'duplicate', 'document', 'image to pdf', 'pdf converter', 'combine pdf']
    },
    {
        id: 'spreadsheet',
        title: 'Data Converter',
        url: 'spreadsheet.html',
        icon: 'fa-table',
        category: 'management',
        categoryLabel: 'Smart Management',
        description: 'Convert Excel (XLSX), CSV, JSON, and text tables easily.',
        keywords: ['data', 'excel', 'csv', 'text', 'converter', 'xlsx', 'spreadsheet', 'sheet', 'json', 'pdf', 'table', 'document', 'rows', 'columns']
    },
    {
        id: 'qr',
        title: 'QR Suite',
        url: 'qr.html',
        icon: 'fa-qrcode',
        category: 'management',
        categoryLabel: 'Smart Management',
        description: 'Generate customizable QR codes, scan barcodes, and create link codes.',
        keywords: ['qr', 'suite', 'barcode', 'scanner', 'generator', 'reader', 'make', 'create', 'link', 'wifi', 'code']
    },
    {
        id: 'cipher',
        title: 'Cipher Box',
        url: 'cipher.html',
        icon: 'fa-user-secret',
        category: 'management',
        categoryLabel: 'Smart Management',
        description: 'Encrypt and decrypt text messages with custom password security.',
        keywords: ['cipher', 'box', 'encrypt', 'decrypt', 'password', 'secure', 'lock', 'hide', 'text', 'vault', 'crypto', 'aes', 'secret']
    },
    {
        id: 'expense',
        title: 'Expense Tracker',
        url: 'expense.html',
        icon: 'fa-indian-rupee-sign',
        category: 'lifestyle',
        categoryLabel: 'Everyday Lifestyle',
        description: 'Track daily expenses, budget breakdown, export/import data, and manage personal finance.',
        keywords: ['expense', 'tracker', 'money', 'finance', 'spend', 'budget', 'wallet', 'calculator', 'track', 'cost', 'income', 'rupee', 'csv', 'json']
    },
    {
        id: 'countdown',
        title: 'Event Countdown',
        url: 'countdown.html',
        icon: 'fa-hourglass-half',
        category: 'lifestyle',
        categoryLabel: 'Everyday Lifestyle',
        description: 'Track remaining days, hours, and minutes for upcoming events and reminders.',
        keywords: ['countdown', 'timer', 'days left', 'clock', 'reminder', 'date', 'schedule', 'event', 'calendar', 'anniversary', 'birthday']
    },
    {
        id: 'date',
        title: 'Date & Age Calculator',
        url: 'date.html',
        icon: 'fa-cake-candles',
        category: 'lifestyle',
        categoryLabel: 'Everyday Lifestyle',
        description: 'Calculate exact age in years, months, days, or days/business days between dates.',
        keywords: ['date', 'age', 'calculator', 'birthday', 'exact age', 'days between', 'business days', 'working days', 'calendar', 'difference']
    },
    {
        id: 'audio',
        title: 'Audio Tester',
        url: 'audio.html',
        icon: 'fa-headphones-simple',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Test headphone & speaker Left/Right audio channels and sound frequencies.',
        keywords: ['audio', 'tester', 'headphone', 'check', 'stereo', 'speaker', 'left', 'right', 'sound', 'frequency', 'channel', 'earphone']
    },
    {
        id: 'timer',
        title: 'Time Notes',
        url: 'timer.html',
        icon: 'fa-stopwatch',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Log real-time events with exact timestamp logs, export/import, and stopwatch timer.',
        keywords: ['time', 'notes', 'timestamp', 'log', 'notepad', 'text editor', 'write', 'stopwatch', 'clock', 'event logger', 'export']
    },
    {
        id: 'notes',
        title: 'Advanced Notes',
        url: 'notes.html',
        icon: 'fa-clipboard-list',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Rich-text note pad with bold/italic styling, headings, export/import, and interactive check-lists.',
        keywords: ['notes', 'advanced', 'to do list', 'text pad', 'notepad', 'write', 'diary', 'daily', 'checklist', 'tasks', 'journal', 'export']
    },
    {
        id: 'converter',
        title: 'Unit Converter',
        url: 'converter.html',
        icon: 'fa-calculator',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Convert Length, Weight, Temperature units with instant live calculation.',
        keywords: ['unit', 'converter', 'length', 'weight', 'temperature', 'calculate', 'measure', 'metric', 'convert', 'km', 'miles', 'kg', 'lbs', 'celsius', 'fahrenheit']
    },
    {
        id: 'number',
        title: 'Number Converter',
        url: 'number.html',
        icon: 'fa-hashtag',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Convert numbers between Binary, Hexadecimal, Decimal, and Octal formats.',
        keywords: ['number', 'converter', 'binary', 'hex', 'decimal', 'octal', 'base', 'calculator', 'math', 'bit', 'bytes']
    },
    {
        id: 'repeater',
        title: 'Text Repeater',
        url: 'repeater.html',
        icon: 'fa-repeat',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Repeat text multiple times with safe count caps, newlines, and custom separators.',
        keywords: ['text', 'repeater', 'spam', 'duplicate', 'copy', 'loop', 'text', 'multiply', 'font', 'whatsapp', 'messages']
    },
    {
        id: 'reverser',
        title: 'Text Reverser',
        url: 'reverser.html',
        icon: 'fa-right-left',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Reverse text characters or flip word order upside-down.',
        keywords: ['text', 'reverser', 'flip', 'backwards', 'reverse', 'string', 'text', 'upside down', 'mirror']
    },
    {
        id: 'resizer',
        title: 'Exam Photo Resizer',
        url: 'resizer.html',
        icon: 'fa-id-card',
        category: 'media',
        categoryLabel: 'Advanced Media',
        description: 'Resize photos & signatures for SSC, UPSC, IBPS, college and job applications to exact KB limits.',
        keywords: ['photo', 'resizer', 'signature', 'ssc', 'upsc', 'ibps', 'exam photo', 'kb size', 'reduce photo', 'job portal']
    },
    {
        id: 'split-bill',
        title: 'Split Bill & Tip',
        url: 'split-bill.html',
        icon: 'fa-file-invoice-dollar',
        category: 'lifestyle',
        categoryLabel: 'Everyday Lifestyle',
        description: 'Divide group bills, calculate tips, and compute per-person shares easily.',
        keywords: ['split bill', 'tip calculator', 'group dining', 'shared expense', 'restaurant', 'bill splitter', 'per person']
    },
    {
        id: 'tax-calculator',
        title: 'Discount & GST Tax',
        url: 'tax-calculator.html',
        icon: 'fa-tags',
        category: 'lifestyle',
        categoryLabel: 'Everyday Lifestyle',
        description: 'Compute shopping discounts, savings, and GST / sales tax breakdowns offline.',
        keywords: ['discount', 'gst', 'tax calculator', 'sales tax', 'coupon', 'savings', 'net price', 'cgst', 'sgst']
    },
    {
        id: 'password-generator',
        title: 'Secure Passwords',
        url: 'password-generator.html',
        icon: 'fa-key',
        category: 'management',
        categoryLabel: 'Smart Management',
        description: 'Generate cryptographically strong passwords and memorable passphrases offline.',
        keywords: ['password generator', 'passphrase', 'secure', 'crypto', 'random password', 'strength checker', 'vault']
    },
    {
        id: 'word-counter',
        title: 'Word & Character Counter',
        url: 'word-counter.html',
        icon: 'fa-align-left',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Count words, characters, reading time, sentences, and paragraphs in real time.',
        keywords: ['word counter', 'character counter', 'reading time', 'text statistics', 'sentence counter', 'keyword density']
    },
    {
        id: 'about',
        title: 'About Toolkit',
        url: 'about.html',
        icon: 'fa-circle-info',
        category: 'info',
        categoryLabel: 'Information',
        description: 'Learn about Smart Mobile Toolkit project, privacy features, and developer.',
        keywords: ['about', 'project', 'antony', 'privacy', 'developer', 'offline', 'info', 'features']
    },
    {
        id: 'contact',
        title: 'Contact Developer',
        url: 'contact.html',
        icon: 'fa-envelope',
        category: 'info',
        categoryLabel: 'Information',
        description: 'Get in touch with the developer, report issues, or send feedback.',
        keywords: ['contact', 'email', 'developer', 'feedback', 'support', 'help', 'issues', 'bugs']
    }
];

// Helper to filter tools by query
function searchTools(query) {
    if (!query) return TOOL_INDEX;
    const cleanQuery = query.toLowerCase().trim();
    return TOOL_INDEX.filter(tool => {
        const titleMatch = tool.title.toLowerCase().includes(cleanQuery);
        const descMatch = tool.description.toLowerCase().includes(cleanQuery);
        const categoryMatch = tool.categoryLabel.toLowerCase().includes(cleanQuery);
        const keywordMatch = tool.keywords.some(kw => kw.toLowerCase().includes(cleanQuery));
        return titleMatch || descMatch || categoryMatch || keywordMatch;
    });
}

// Global Search Modal Injector (for all pages)
function injectGlobalSearchModal() {
    if (document.getElementById('globalSearchModal')) return;

    const modalHTML = `
    <div class="modal fade" id="globalSearchModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <div class="w-100 modal-search-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="modalSearchInput" class="form-control modal-search-input" placeholder="Search tools (e.g. 'pdf', 'mp4 to mp3', 'age', 'qr')..." autocomplete="off">
                    </div>
                    <button type="button" class="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close Modal"></button>
                </div>
                <div class="modal-body pt-2">
                    <div id="modalSearchTagsBar" class="search-tags-bar mb-2">
                        <span class="search-tags-label">Popular:</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('pdf')">#PDF</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('mp4 to mp3')">#Video to Audio</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('compress')">#Compress</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('age')">#Age Calculator</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('qr')">#QR Code</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('excel')">#Data Converter</span>
                    </div>
                    <div id="modalSearchResultsList" class="global-search-results-list"></div>
                </div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modalInput = document.getElementById('modalSearchInput');
    const resultsContainer = document.getElementById('modalSearchResultsList');

    function renderModalResults(query) {
        const matches = searchTools(query);
        if (matches.length === 0) {
            resultsContainer.innerHTML = `
                <div class="text-center py-4 text-muted">
                    <i class="fa-solid fa-face-frown fa-2x mb-2" style="color: var(--danger-color);"></i>
                    <p class="m-0">No tools found matching "<strong>${escapeHTML(query)}</strong>"</p>
                </div>`;
            return;
        }

        resultsContainer.innerHTML = matches.map(tool => `
            <a href="${tool.url}" class="search-result-item">
                <div class="search-result-icon">
                    <i class="fa-solid ${tool.icon}"></i>
                </div>
                <div class="search-result-info">
                    <div class="search-result-title">${tool.title} <span class="badge bg-dark border border-secondary text-info ms-2" style="font-size: 0.65rem;">${tool.categoryLabel}</span></div>
                    <div class="search-result-desc">${tool.description}</div>
                </div>
                <i class="fa-solid fa-arrow-right search-result-arrow"></i>
            </a>
        `).join('');
    }

    if (modalInput) {
        modalInput.addEventListener('input', (e) => renderModalResults(e.target.value));
    }

    const modalElement = document.getElementById('globalSearchModal');
    if (modalElement) {
        modalElement.addEventListener('shown.bs.modal', () => {
            if (modalInput) {
                modalInput.focus();
                renderModalResults(modalInput.value);
            }
        });
    }
}

function triggerModalSearch(query) {
    const modalInput = document.getElementById('modalSearchInput');
    if (modalInput) {
        modalInput.value = query;
        modalInput.dispatchEvent(new Event('input'));
        modalInput.focus();
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Inject Theme Switcher button into Navbar
function injectThemeToggleBtn() {
    const navList = document.querySelector('.navbar-nav');
    if (navList && !document.getElementById('themeToggleBtn')) {
        const li = document.createElement('li');
        li.className = 'nav-item d-flex align-items-center';
        li.innerHTML = `
            <button class="theme-toggle-btn" id="themeToggleBtn" onclick="toggleTheme()" aria-label="Toggle Light & Dark Theme">
                <i class="fa-solid fa-sun"></i>
            </button>
        `;
        navList.appendChild(li);
        updateThemeToggleIcons();
    }
}

// Utility helper to setup modern file input drag & drop behavior
window.setupModernDropzone = function(dropzoneId, fileInputId, arg3, arg4) {
    const dropzoneEl = typeof dropzoneId === 'string' ? document.getElementById(dropzoneId) : dropzoneId;
    const fileInputEl = typeof fileInputId === 'string' ? document.getElementById(fileInputId) : fileInputId;

    if (!dropzoneEl || !fileInputEl) {
        console.warn('Dropzone setup failed: missing elements', { dropzoneId, fileInputId });
        return;
    }
    
    // FORCE NATIVE FILE SELECTION FOR MOBILE RELIABILITY
    fileInputEl.style.display = 'block';
    fileInputEl.style.opacity = '1';
    fileInputEl.style.position = 'relative';
    fileInputEl.style.zIndex = '1';
    fileInputEl.style.margin = '15px auto 0 auto';
    fileInputEl.style.width = '80%';
    fileInputEl.style.maxWidth = '300px';
    fileInputEl.style.color = '#fff';
    fileInputEl.classList.add('form-control', 'bg-dark', 'text-white', 'border-secondary');

    let fileCardEl = null;
    let onFileSelected = null;

    if (typeof arg3 === 'function') {
        onFileSelected = arg3;
    } else {
        fileCardEl = typeof arg3 === 'string' ? document.getElementById(arg3) : arg3;
        onFileSelected = arg4;
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzoneEl.addEventListener(eventName, (e) => {
            e.preventDefault(); e.stopPropagation();
            dropzoneEl.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzoneEl.addEventListener(eventName, (e) => {
            e.preventDefault(); e.stopPropagation();
            dropzoneEl.classList.remove('dragover');
        }, false);
    });

    const handleFiles = (files) => {
        if (!files || files.length === 0) return;
        const file = files[0];
        
        if (fileCardEl) {
            const nameEl = fileCardEl.querySelector('.dz-filename, .file-name');
            const sizeEl = fileCardEl.querySelector('.dz-filesize, .file-size');
            if (nameEl) nameEl.textContent = file.name;
            if (sizeEl) sizeEl.textContent = `${(file.size / 1024).toFixed(1)} KB`;
            fileCardEl.classList.remove('d-none');
            const contentEl = dropzoneEl.querySelector('.dz-content, .dropzone-text-group');
            if (contentEl) contentEl.classList.add('d-none');
        } else {
            // Only inject the card if the tool does not completely hide the dropzone
            // We check this by seeing if the tool's callback is known to hide the dropzone
            // To be safe, we'll append the injected card, but the tool's own callback might hide it
            const contentEl = dropzoneEl.querySelector('.dz-content, .dropzone-text-group');
            if (contentEl) contentEl.style.display = 'none';

            let injectedCard = dropzoneEl.querySelector('.injected-file-card');
            if (!injectedCard) {
                injectedCard = document.createElement('div');
                injectedCard.className = 'injected-file-card text-center p-3 w-100';
                injectedCard.innerHTML = `
                    <i class="fa-solid fa-file-circle-check fa-3x mb-2" style="color: var(--primary-glow);"></i>
                    <h5 class="file-name text-truncate text-white" style="max-width: 90%; margin: 0 auto; font-weight: 600;"></h5>
                    <p class="file-size text-muted small mb-3"></p>
                    <button class="btn btn-sm custom-btn btn-secondary remove-file-btn" type="button" style="padding: 6px 12px; font-size: 0.8rem;"><i class="fa-solid fa-times"></i> CHANGE FILE</button>
                `;
                dropzoneEl.appendChild(injectedCard);
            }
            injectedCard.style.display = 'block';
            injectedCard.querySelector('.file-name').textContent = file.name;
            injectedCard.querySelector('.file-size').textContent = `${(file.size / 1024).toFixed(1)} KB`;
        }

        if (typeof onFileSelected === 'function') {
            try {
                onFileSelected(file, files);
            } catch (err) {
                console.error('Error in onFileSelected callback:', err);
            }
        }
    };

    dropzoneEl.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
            try { fileInputEl.files = dt.files; } catch(err){}
            handleFiles(dt.files);
        }
    });

    dropzoneEl.addEventListener('click', (e) => {
        if (e.target.closest('.dz-remove-btn, .btn-close, .remove-file-btn')) {
            e.stopPropagation();
            fileInputEl.value = '';
            if (fileCardEl) {
                fileCardEl.classList.add('d-none');
                const contentEl = dropzoneEl.querySelector('.dz-content, .dropzone-text-group');
                if (contentEl) contentEl.classList.remove('d-none');
            } else {
                const injectedCard = dropzoneEl.querySelector('.injected-file-card');
                if (injectedCard) injectedCard.style.display = 'none';
                const contentEl = dropzoneEl.querySelector('.dz-content, .dropzone-text-group');
                if (contentEl) contentEl.style.display = '';
            }
            if (typeof onFileSelected === 'function') {
                try { onFileSelected(null, null); } catch (err) {}
            }
            return;
        }
        
        // Let the user click the native file input instead of forcing a programmatic click.
        // We only trigger it if they explicitly clicked the dropzone text/icon, NOT if they clicked the input itself.
        // Wait, actually, since the input is clearly visible now, let's just let them click it!
        // No programmatic clicks at all! This guarantees 100% device compatibility.
    });

    dropzoneEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInputEl.click();
        }
    });

    fileInputEl.addEventListener('change', () => {
        handleFiles(fileInputEl.files);
    });
};

// Keyboard Listener for slash or search input
document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
    }

    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        const mainInput = document.getElementById('toolSearch');
        if (mainInput) {
            mainInput.focus();
            mainInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            const modalEl = document.getElementById('globalSearchModal');
            if (modalEl && window.bootstrap) {
                const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
                modal.show();
            }
        }
    }
});

// Register Service Worker for offline PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW Register Error:', err));
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    injectGlobalSearchModal();
    injectThemeToggleBtn();
    
    // Global back button handler to preserve search state and scroll position
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Check if we came from our own site
            if (document.referrer && document.referrer.includes(window.location.hostname)) {
                e.preventDefault();
                window.history.back();
            }
            // If they landed directly on this page, it falls back to the default href="index.html"
        });
    });
});
