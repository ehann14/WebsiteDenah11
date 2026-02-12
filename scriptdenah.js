// Inisialisasi Pannellum Viewer
document.addEventListener('DOMContentLoaded', function() {
    // Konfigurasi panorama - ganti dengan path gambar panorama Anda
    const panoramaConfig = {
        "type": "equirectangular",
        "panorama": "asset/Tangga_spw.jpg", // Ganti dengan path gambar panorama 360° Anda
        "autoLoad": true,
        "showZoomCtrl": true,
        "showFullscreenCtrl": true,
        "compass": true,
        "title": "Lingkungan Sekolah SMK Negeri 11 Bandung",
        "author": "SMK Negeri 11 Bandung",
        "horizonPitch": 0,
        "horizonRoll": 0,
        "autoRotate": -2,
        "autoRotateInactivityDelay": 5000,
        "mouseZoom": true,
        "doubleClickZoom": true,
        "friction": 0.15,
        "keyboardZoom": true
    };

    // Inisialisasi viewer
    let viewer;
    
    try {
        viewer = pannellum.viewer('panorama', panoramaConfig);
        
        // Event listener untuk hotspots (opsional)
        viewer.on('load', function() {
            console.log('Panorama loaded successfully');
        });
        
        viewer.on('error', function(error) {
            console.error('Panorama error:', error);
            // Fallback jika panorama gagal dimuat
            document.getElementById('panorama').style.display = 'none';
            document.querySelector('.school-map').style.marginTop = '0';
        });
    } catch (error) {
        console.error('Pannellum initialization error:', error);
        document.getElementById('panorama').style.display = 'none';
    }

    // Fungsi zoom untuk denah tradisional
    document.getElementById('schoolMap').addEventListener('click', function() {
        if (this.style.transform === 'scale(1.5)') {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        } else {
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'transform 0.3s ease';
        }
    });

    // Hotspots untuk lokasi penting (opsional)
    const hotspots = [
        {
            "pitch": 0,
            "yaw": 0,
            "type": "info",
            "text": "Gedung Utama",
            "URL": "#"
        },
        {
            "pitch": 10,
            "yaw": 30,
            "type": "info",
            "text": "Lapangan Olahraga",
            "URL": "#"
        }
    ];

    // Tambahkan hotspots jika viewer berhasil diinisialisasi
    if (viewer) {
        hotspots.forEach(function(hotspot) {
            viewer.addHotSpot(hotspot);
        });
    }
});