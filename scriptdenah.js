document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah elemen panorama ada
    const panoramaEl = document.getElementById('panorama');
    if (!panoramaEl) return;

    // Inisialisasi Pannellum dengan gambar panorama
    // ⚠️ GANTI 'asset/panorama.jpg' dengan path gambar 360° Anda
    const viewer = pannellum.viewer(panoramaEl, {
        "type": "equirectangular",
        "panorama": "asset/Otkp11.jpg", // ← WAJIB GANTI DENGAN GAMBAR ANDA
        "autoLoad": true,
        "showZoomCtrl": true,
        "showFullscreenCtrl": true,
        "compass": true,
        "title": "Lingkungan SMK Negeri 11 Bandung",
        "horizonPitch": 0,
        "autoRotate": -1.5,
        "autoRotateInactivityDelay": 5000,
        "mouseZoom": true,
        "friction": 0.15,
        "backgroundColor": [26, 83, 92] // Warna teal sesuai preferensi user
    });

    // Hotspots contoh (sesuaikan koordinat sesuai gambar panorama Anda)
    viewer.on('load', function() {
        viewer.addHotSpot({
            "pitch": 5,
            "yaw": 10,
            "type": "info",
            "text": "Gedung Utama",
            "createTooltipFunc": hotspotTooltip,
            "createTooltipArgs": "Gedung Utama"
        });
        
        viewer.addHotSpot({
            "pitch": -5,
            "yaw": -30,
            "type": "info",
            "text": "Lapangan Olahraga",
            "createTooltipFunc": hotspotTooltip,
            "createTooltipArgs": "Lapangan Olahraga"
        });
    });

    // Fungsi tooltip custom
    function hotspotTooltip(hotSpotDiv, args) {
        hotSpotDiv.classList.add('custom-tooltip');
        hotSpotDiv.innerHTML = args;
        hotSpotDiv.style.backgroundColor = '#1A535C';
        hotSpotDiv.style.color = 'white';
        hotSpotDiv.style.padding = '8px 12px';
        hotSpotDiv.style.borderRadius = '6px';
        hotSpotDiv.style.position = 'absolute';
        hotSpotDiv.style.transform = 'translate(-50%, -100%)';
        hotSpotDiv.style.top = '-10px';
        hotSpotDiv.style.left = '50%';
        hotSpotDiv.style.whiteSpace = 'nowrap';
        hotSpotDiv.style.fontSize = '14px';
        hotSpotDiv.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    }

    // Zoom untuk denah tradisional
    const schoolMap = document.getElementById('schoolMap');
    if (schoolMap) {
        schoolMap.addEventListener('click', function() {
            if (this.style.transform === 'scale(1.5)') {
                this.style.transform = 'scale(1)';
            } else {
                this.style.transform = 'scale(1.5)';
            }
            this.style.transition = 'transform 0.3s ease';
        });
    }

});