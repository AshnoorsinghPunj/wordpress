<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u684516798_aVKgb' );

/** Database username */
define( 'DB_USER', 'u684516798_VelXB' );

/** Database password */
define( 'DB_PASSWORD', '9vbD4gKaCw' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'lEW5<#4K%?U)/]*6`DrEGQRqM];|:0y0U=t(iv!KhC-EwVZt@hn{Xp;&Yz<zTjTY' );
define( 'SECURE_AUTH_KEY',   '3fV=UPSycU<Lt`Lf`F.}|oa5qH6_|bycp^M6qr$eaIQK#[m=!7HLBEN!1`<>}m6$' );
define( 'LOGGED_IN_KEY',     'lOe=1ap:+~}QfvbuLL+:{~}lm<ui!.%WOQ=E3+D<HP7ZG1NkvWn!67Xa%-nML9B?' );
define( 'NONCE_KEY',         '$V_.}GM :0$NM:Tw6~iefD+|B}sW?cfFLVNH<q%4SU$)PX@T>X43{mOqER4:c6 m' );
define( 'AUTH_SALT',         'Ou~6A=/yQ`ZLtE>.n}7AQX7$gNCug9DR%6pAGHTPC6?^8}AUw ^B;nDpAH]^KdHx' );
define( 'SECURE_AUTH_SALT',  '4QpbPm3zz%bT!Q|*h$kjS6<I,6JFy~V0`-88lLPk}A|7qLQ6AxueEnrWfCv]D+v3' );
define( 'LOGGED_IN_SALT',    'gUW%pp1uSi~G!:9clsWMpk^XE5=jckqQfe)$u0H1F1#&IHUgZI~zF Kb,|[Dx]a_' );
define( 'NONCE_SALT',        '9I?X&XS >>VAY(jmxdP2%ykKg,.wL[G)ue{]f`iP%&l205(>$PV]|1PT`;S7Qh+K' );
define( 'WP_CACHE_KEY_SALT', 'i)%9X$ls5Cw_uphUr#,fq0i3YjlQM.MO(F,8;I1[2k!P;X4Q3D2P&f-wDOS|Uc d' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
