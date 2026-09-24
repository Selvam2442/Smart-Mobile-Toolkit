/* ==========================================================================
   SMART MOBILE TOOLKIT - ADVANCED GLOBAL SEARCH ENGINE SYSTEM
   ========================================================================== */

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
        description: 'Track daily expenses, budget breakdown, and manage personal finance.',
        keywords: ['expense', 'tracker', 'money', 'finance', 'spend', 'budget', 'wallet', 'calculator', 'track', 'cost', 'income', 'rupee']
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
        description: 'Log real-time events with exact timestamp logs and stopwatch timer.',
        keywords: ['time', 'notes', 'timestamp', 'log', 'notepad', 'text editor', 'write', 'stopwatch', 'clock', 'event logger']
    },
    {
        id: 'notes',
        title: 'Advanced Notes',
        url: 'notes.html',
        icon: 'fa-clipboard-list',
        category: 'utilities',
        categoryLabel: 'Basic Utilities',
        description: 'Rich-text note pad with bold/italic styling, headings, and interactive check-lists.',
        keywords: ['notes', 'advanced', 'to do list', 'text pad', 'notepad', 'write', 'diary', 'daily', 'checklist', 'tasks', 'journal']
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
        description: 'Repeat text multiple times with newlines and custom separators for messaging.',
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
                        <input type="text" id="modalSearchInput" class="form-control modal-search-input" placeholder="Search any tool (e.g., 'pdf', 'mp4 to mp3', 'crop', 'qr')..." autocomplete="off">
                    </div>
                    <button type="button" class="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body pt-2">
                    <div id="modalSearchTagsBar" class="search-tags-bar mb-2">
                        <span class="search-tags-label">Popular:</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('pdf')">#PDF</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('mp4 to mp3')">#Video to Audio</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('compress')">#Compress</span>
                        <span class="search-tag-chip" onclick="triggerModalSearch('photo')">#Photo Editor</span>
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

// Keyboard Hotkey Listener: Ctrl + K or / to search
document.addEventListener('keydown', (e) => {
    // Prevent overriding when user is inside input/textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
            document.activeElement.blur();
        }
        return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
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
    } else if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    injectGlobalSearchModal();
});
